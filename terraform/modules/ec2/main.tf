
resource "aws_instance" "web" {
  count = length(var.ec2_names)
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t3.micro"
  associate_public_ip_address = true
  vpc_security_group_ids = [var.sg_id]
  subnet_id = var.subnets[count.index]
  availability_zone = data.aws_availability_zones.available.names[count.index]
  key_name = var.key_name

  tags = {
    Name = var.ec2_names[count.index]
  }

  provisioner "remote-exec" {
    inline = [
      "echo 'SSH ready!'"
    ]

    connection {
      type        = "ssh"
      user        = "ubuntu"
      private_key = file(abspath(var.private_key_path))
      host        = self.public_ip
    }
  }
}


data "template_file" "cloudflare_vars" {
  template = <<-EOT
    ---
    cloudflare_zone_ids:
      %{ for domain, zone_id in var.cloudflare_zone_ids ~}
      "${domain}": "${zone_id}"
      %{ endfor ~}
  EOT
}

resource "local_file" "cloudflare_vars_file" {
  filename = "${abspath(path.module)}/../../../ansible/vars/cloudflare_vars.yml"
  content  = data.template_file.cloudflare_vars.rendered
}


data "template_file" "inventory" {
  template = <<-EOT
    [ec2_instances:children]
    %{ for child_node in var.ec2_names ~}
    ${child_node}
    %{ endfor ~}

    %{ for index in range(length(aws_instance.web.*.public_ip)) ~}
    [${var.ec2_names[index]}]
    ${aws_instance.web.*.public_ip[index]} ansible_user=ubuntu ansible_ssh_private_key_file=${abspath(var.private_key_path)}
    %{ endfor ~}
  EOT
}

resource "local_file" "dynamic_inventory" {
  depends_on = [ aws_instance.web ]

  filename = "${abspath(path.module)}/../../../ansible/inventory/dynamic_inventory.ini"
  content  = data.template_file.inventory.rendered

  provisioner "local-exec" {
    command = "chmod 400 ${local_file.dynamic_inventory.filename}"
  }
}


resource "null_resource" "run_ansible" {
  depends_on = [
    local_file.dynamic_inventory,
    local_file.cloudflare_vars_file
    ]

  provisioner "local-exec" {
    command = <<EOF
      sleep 30;
      sudo apt update -y;
      cd ../../../ansible/;
      ls -a;
      ls deploy-app.yml;
      env ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -i ${self.triggers.inventory_file} deploy-app.yml -vvv
    EOF

    working_dir = path.module
  }

  triggers = {
    always_run = "${timestamp()}"
    inventory_file = abspath(local_file.dynamic_inventory.filename)
  }
}
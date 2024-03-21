resource "aws_eip" "example" {
  domain = "vpc"

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_eip_association" "example_assoc" {
  instance_id   = var.instance_id
  allocation_id = aws_eip.example.id
}

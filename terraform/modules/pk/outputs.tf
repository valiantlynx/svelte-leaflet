output "key_name"{
    value = var.key_name
}

output "private_key_path" {
  value = "${path.module}/${var.key_name}.pem"
}
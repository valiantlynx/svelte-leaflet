output "instances" {
  value = aws_instance.web.*.id
}

output "public_ip" {
  value = aws_instance.web.*.public_ip
}

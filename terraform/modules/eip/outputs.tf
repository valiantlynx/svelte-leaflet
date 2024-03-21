output "eip_address" {
  value       = aws_eip.example.public_ip
  description = "The Elastic IP address."
}

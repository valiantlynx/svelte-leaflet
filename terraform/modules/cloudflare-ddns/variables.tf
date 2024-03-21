variable "public_ip" {
  description = "The ip's of the instance."
  type        = list(string)
}

variable "cloudflare_zone_ids" {
  type = map(string)
  description = "Mapping of domain names to Cloudflare zone IDs"
}



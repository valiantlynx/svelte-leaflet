variable "vpc_cidr" {
  description = "VPC CIDR Range"
  type = string
}

variable "subnet_cidr" {
    description = "Subnet CIDRS"
    type = list(string)
}

variable "cloudflare_zone_ids" {
  type = map(string)
  description = "Mapping of domain names to Cloudflare zone IDs"
  default = {
    "valiantlynx.com" = "cc6721eb589ec5e29adc0a306fa5d5fe"
  }
}
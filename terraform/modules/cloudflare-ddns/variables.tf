variable "public_ip" {
  description = "The ip's of the instance."
  type        = list(string)
}

variable "cloudflare_zone_ids" {
  description = "Map of domain to Cloudflare zone IDs, subdomains, and inclusion flags"
  type = map(object({
    zone_id            = string
    service            = optional(string) # Now optional for root domains
    port               = optional(number) # Now optional for root domains
    subdomains         = list(object({
      name             = string
      service          = string
      port             = number
    }))
    include_root       = bool
    include_subdomains = bool
  }))
}

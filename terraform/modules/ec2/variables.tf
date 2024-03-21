variable "sg_id" {
  description = "SG ID for EC2"
  type = string
}

variable "subnets" {
  description = "Subnets for EC2"
  type = list(string)
}

variable "ec2_names" {
    description = "EC2 names"
    type = list(string)
    default = ["svelte-leaflet1"] # e.g ["svelte-leaflet1", "svelte-leaflet2"]
}

variable "key_name" {
  description = "Key name for svelte-leaflet EC2"
  type = string
}

variable "private_key_path" {
  description = "Key full path"
  type = string
}

variable "cloudflare_zone_ids" {
  type = map(string)
  description = "Mapping of domain names to Cloudflare zone IDs"
}


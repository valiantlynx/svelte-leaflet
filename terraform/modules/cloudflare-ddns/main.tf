resource "cloudflare_record" "ec2_dns_a" {
  for_each = var.cloudflare_zone_ids
  zone_id  = each.value
  name     = "svelte-leaflet.${each.key}"
  value    = var.public_ip[0]
  type     = "A"
  ttl      = 1 // Auto
  proxied  = false
}
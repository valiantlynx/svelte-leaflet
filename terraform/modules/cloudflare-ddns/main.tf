locals {
  # Construct root domain records
  root_dns_records = {
    for domain, details in var.cloudflare_zone_ids :
    domain => {
      zone_id = details.zone_id,
      name    = domain,
      type    = "A",
      value   = element(var.public_ip, 0)
    } if details.include_root == true
  }

  # Construct subdomain records
  subdomain_dns_records = merge([
    for domain, details in var.cloudflare_zone_ids : {
      for subdomain in details.subdomains : 
      "${subdomain.name}.${domain}" => {
        zone_id = details.zone_id,
        name    = "${subdomain.name}.${domain}",
        type    = subdomain.name == "www" ? "CNAME" : "A",
        value   = subdomain.name == "www" ? domain : element(var.public_ip, 0)
      }
    } if details.include_subdomains == true
  ]...)

  # Combine root and subdomain records into one map
  combined_dns_records = merge(local.root_dns_records, local.subdomain_dns_records)
}

resource "cloudflare_record" "ec2_dns_records" {
  for_each = local.combined_dns_records

  zone_id = each.value["zone_id"]
  name    = each.value["name"]
  type    = each.value["type"]
  value   = each.value["value"]
  ttl     = 1  # Auto, use a specific TTL if needed
  proxied = false
}

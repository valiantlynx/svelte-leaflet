module "vpc" {
  source = "./modules/vpc"
  vpc_cidr = var.vpc_cidr
  subnet_cidr = var.subnet_cidr
}

module "pk" {
    source = "./modules/pk"
}

module "sg" {
    source = "./modules/sg"
    vpc_id = module.vpc.vpc_id
}


module "ec2" {
  source = "./modules/ec2"
  sg_id = module.sg.sg_id
  subnets = module.vpc.subnet_ids
  key_name = module.pk.key_name
  private_key_path = module.pk.private_key_path
  cloudflare_zone_ids = var.cloudflare_zone_ids
}

module "cloudflare-ddns" {
  source      = "./modules/cloudflare-ddns"
  public_ip = module.ec2.public_ip
  cloudflare_zone_ids = var.cloudflare_zone_ids
}

# module "eip" {
#   source      = "./modules/eip"
#   instance_id = module.ec2.instances
# }

# module "alb" {
#   source = "./modules/alb"
#   sg_id = module.sg.sg_id
#   subnets = module.vpc.subnet_ids
#   vpc_id = module.vpc.vpc_id
#   instances = module.ec2.instances
# }
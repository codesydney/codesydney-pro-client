provider "aws" {
  region = "ap-southeast-2"
}

terraform {
  backend "s3" {
    bucket = "techies4good-tf-state"
    key    = "techies4good.tfstate"
    region = "ap-southeast-2"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project = var.project
    ManagedBy = "Terraform"
    Owner = "Code.Sydney"
  }
}

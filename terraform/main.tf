provider "aws" {
  region = "ap-southeast-2"
}

terraform {
  backend "s3" {
    bucket = "t4g-tf-state"
    key    = "t4g.tfstate"
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
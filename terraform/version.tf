terraform {
  required_version = ">= 1.2.0, <= 1.8.4"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}
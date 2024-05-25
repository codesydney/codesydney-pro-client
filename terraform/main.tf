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
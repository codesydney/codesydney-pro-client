resource "aws_s3_bucket" "techies4good_cs_s3_bucket" {
  bucket        = "${local.prefix}-app"
  force_destroy = true

  tags = local.common_tags
}

resource "aws_s3_bucket_public_access_block" "techies4good_cs_s3_bucket_public_access_block" {
  bucket = aws_s3_bucket.techies4good_cs_s3_bucket.id

  block_public_acls       = true
  block_public_policy     = false  # Allow bucket policies to control access
  ignore_public_acls      = true
  restrict_public_buckets = false  # Allow public access with bucket policy
}

resource "aws_s3_bucket_versioning" "techies4good_cs_s3_bucket_versioning" {
  bucket = aws_s3_bucket.techies4good_cs_s3_bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_policy" "techies4good_cs_s3_bucket_policy" {
  bucket = aws_s3_bucket.techies4good_cs_s3_bucket.id
  policy = data.aws_iam_policy_document.techies4good_cs_s3_bucket_policy_document.json
}

resource "aws_s3_bucket_website_configuration" "techies4good_cs_s3_bucket_website_configuration" {
  bucket = aws_s3_bucket.techies4good_cs_s3_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

data "aws_iam_policy_document" "techies4good_cs_s3_bucket_policy_document" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.techies4good_cs_s3_bucket.arn}/*"]
    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.techies4good_cloudfront_origin_access_identity.iam_arn]
    }
  }

  # Public access policy for static website hosting
  statement {
    sid       = "PublicReadGetObject"
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.techies4good_cs_s3_bucket.arn}/*"]
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
    effect = "Allow"
  }
}

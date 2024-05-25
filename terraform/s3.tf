resource "aws_s3_bucket" "tech4good_s3_bucket" {
  bucket        = "${local.prefix}-app"
  force_destroy = true

  tags = local.common_tags
}

resource "aws_s3_bucket_public_access_block" "tech4good_s3_bucket_public_access_block" {
  bucket = aws_s3_bucket.tech4good_s3_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "tech4good_s3_bucket_versioning" {
  bucket = aws_s3_bucket.tech4good_s3_bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_policy" "tech4good_s3_bucket_policy" {
  bucket = aws_s3_bucket.tech4good_s3_bucket.id
  policy = data.aws_iam_policy_document.frontend_workflow_s3_bucket_policy_document.json
}

resource "aws_s3_bucket_website_configuration" "tech4good_s3_bucket_website_configuration" {
  bucket = aws_s3_bucket.tech4good_s3_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

data "aws_iam_policy_document" "frontend_workflow_s3_bucket_policy_document" {
  statement {
    actions = ["s3:GetObject"]

    resources = [
      aws_s3_bucket.tech4good_s3_bucket.arn,
      "${aws_s3_bucket.tech4good_s3_bucket.arn}/*"
    ]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.tech4good_cloudfront_origin_access_identity.iam_arn]
    }
  }
}
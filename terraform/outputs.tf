output "techies4good_bucket_name" {
  value = aws_s3_bucket.techies4good_s3_bucket.id
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.techies4good_cloudfront_distribution.id
}
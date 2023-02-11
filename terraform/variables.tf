variable "aws_vpc_id" {
  type          = string
  description   = "AWS VPC ID deployed from network repo"
  default       = "vpc-022a7e2f1347546c8" # CHANGE TO YOUR OWN VPC ID
}

variable "aws_public_subnet_ids" {
  description = "public subnet ids"
  default     = ["subnet-0d308d8683399a57f", "subnet-0fe876cb0b59a4d70"] # CHANGE TO YOUR SUBNET IDS
}

variable "aws_private_subnet_ids" {
  description = "private subnet ids"
  default     = ["subnet-01323a6dc7768cc27", "subnet-03f9393efbd59b242"] # CHANGE TO YOUR SUBNET IDS
}

variable "aws_region" {
  type        = string
  description = "AWS Region"
  default     = "us-east-1"
}

variable "app_name" {
  type        = string
  description = "Application Name"
  default = "vendor-course"
}

variable "ecs_twitter_env_secrets_key" {
  description = "Secrets key file"
  default = "ecs_env_vars.json"
}

variable "ecs_twitter_env_secrets_folder" {
  description = "Secrets S3 folder"
  default = "vendor-twitter-secrets"
}

variable "dynamodb_vendor_table_name" {
  description = "Table name for dynamodb vendors"
  default = "vendors"
}

variable "sqs_queue_name" {
  description = "Name for SQS queue"
  default = "vendor-twitter-queue"
}

variable "image_tag" {}

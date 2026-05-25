variable "region" {
  description = "AWS region for bookstore infrastructure"
  type        = string
  default     = "us-east-1"
}

variable "allowed_cidrs" {
  description = "CIDR blocks allowed to reach the bookstore DB. MUST be your VPC CIDR or a known bastion subnet - never 0.0.0.0/0."
  type        = list(string)

  validation {
    condition     = !contains(var.allowed_cidrs, "0.0.0.0/0")
    error_message = "0.0.0.0/0 is not permitted for allowed_cidrs. Use the VPC or bastion CIDR."
  }

  validation {
    condition     = length(var.allowed_cidrs) > 0
    error_message = "allowed_cidrs must contain at least one CIDR."
  }
}

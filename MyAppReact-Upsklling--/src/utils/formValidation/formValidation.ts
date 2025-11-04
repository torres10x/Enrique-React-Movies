export function validate_username(username: string): string {
  if (!username.trim()) {
    return "User Name is required";
  }
  return "";
}
export function validate_email(email: string): string {
  if (!email.trim()) {
    return "email is required";
  }
  return "";
}

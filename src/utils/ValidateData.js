export const checkValidData = (email, password, name = "") => {
  const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  let isName = true;
  if (name) {
    isName = /^[a-zA-Z\s]+$/.test(name);
  }
  if (name && !isName) return "Name can only contain letters and spaces";
  if (!isEmail) return "Invalid email format";
  if (!isPassword)
    return "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";

  return null;
};

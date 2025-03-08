// Validates email format
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Example usage:
//   console.log(isValidEmail('user@example.com'));  // true (valid email)
//   console.log(isValidEmail('userexample.com'));  // false (invalid email)
//   console.log(isValidEmail('user@com'));         // false (invalid email)
//   console.log(isValidEmail('user@domain.co.uk'));// true (valid email)
  
  // Validates strong password: At least 8 characters, one uppercase letter, and one number
  export const isStrongPassword = (password: string): boolean => {
    return password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);
  };
  
  // Example usage:
//   console.log(isStrongPassword('Password123')); // true (valid strong password)
//   console.log(isStrongPassword('password'));    // false (no uppercase, no number)
//   console.log(isStrongPassword('12345678'));    // false (no uppercase)
//   console.log(isStrongPassword('P@ssword12'));  // true (valid strong password)
//   console.log(isStrongPassword('Pass12'));      // false (too short)
  
  // Validates Tunisian phone number
  export const isValidTunisianPhoneNumber = (phone: string): boolean => {
    const tunisianPhoneRegex = /^(?:\+216|00216)?[2459678]\d{7}$/; // Matches +216XXXXXXXX or 00216XXXXXXXX or 8-digit local numbers
    return tunisianPhoneRegex.test(phone);
  };
  
  // Example usage:
//   console.log(isValidTunisianPhoneNumber('+21698765432'));  // true (valid Tunisian phone number with international code)
//   console.log(isValidTunisianPhoneNumber('0021698765432')); // true (valid Tunisian phone number with international code)
//   console.log(isValidTunisianPhoneNumber('98765432'));      // true (valid local Tunisian phone number)
//   console.log(isValidTunisianPhoneNumber('+21798765432'));  // false (invalid number, starts with +217)
//   console.log(isValidTunisianPhoneNumber('12345678'));      // false (invalid number, doesn't match format)
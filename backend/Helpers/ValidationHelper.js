// Helpers/ValidationHelper.js

module.exports = {
  areFieldsFilled: (fields) => {
    return fields.every((field) => field && field.trim() !== "");
  },

  isEmailValid: (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  doPasswordsMatch: (pass1, pass2) => {
    return pass1 === pass2;
  },
};

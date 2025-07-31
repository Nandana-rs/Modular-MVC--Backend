// hash-password.js
const bcrypt = require('bcrypt');

const password = 'admin123'; // change to your desired admin password
bcrypt.hash(password, 10).then(hash => {
  console.log("Hashed password:", hash);
});

// this file in backend is for creating hashedpasswords :}

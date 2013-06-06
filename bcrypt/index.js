var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("abc", salt);

console.log(salt);
console.log(hash);
var password = bcrypt.compareSync("abc", hash);
console.log(password);


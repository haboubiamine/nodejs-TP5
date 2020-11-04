var validator = require('validator');
 
const email = validator.isEmail('foo@bar.com'); 
const upper = validator.isUppercase("QQQQQ");
const empty = validator.isEmpty("a");
const dat = validator.isDate("2020/11/04");


console.log(dat)



//  npm run validator
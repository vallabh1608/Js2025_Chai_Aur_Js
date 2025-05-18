const str = "Vallabh"
const rollno = 483
console.log(`My Name is ${str.toUpperCase()} and my Roll No is ${rollno}`);
console.log(str.indexOf('b'));
console.log(str.charAt(2));
const newstr = str.substring(1,3);
console.log(newstr);
console.log(str.slice(0,3));
const idtent = "   varunika  "
console.log(idtent.trim());
const url = "https://hitesh.com/hitesh%20kumar";
console.log(url.replace('%20', '-'));
let clgName = "Sri Indu College of Engineering & Technology";
console.log(clgName.split(" "));
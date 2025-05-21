let arr = [1,2,3,4,5,6,7];
arr.forEach((item)=>console.log(item)) //foreach
console.log(arr.filter((item) => item > 4)) //filter
console.log(arr.map((item) => item * 5)); // map
let newarr = arr.map((item) => item * 10)
                .map((item) => item + 1)
                .filter((item) => item > 40)
console.log(newarr);
let total = arr.reduce((acc, curr) => acc + curr);
console.log(total);
let languages = ["Java", "Python", "Html", "CSS", "JavaScript"];
let skills = languages.reduce((acc,curr)=> acc + ", "+curr);
console.log(`Skills :- ${skills}`);


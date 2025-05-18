let fruits = ["Mango", "Guava", "Apple", "Grapes"];
let veggies = ["Tomato","Bringal","Bottle guard","Ladies Finger","Beans"];
fruits.push("Lichi");
veggies.pop();//"Tomato","Bringal","Bottle guard","Ladies Finger",
console.log(fruits.concat(veggies))
// [
//   'Mango',
//   'Guava',
//   'Apple',
//   'Grapes',
//    'Lichi',
//   'Tomato',
//   'Bringal',
//   'Bottle guard',
//   'Ladies Finger',
//   'Beans'
// ]
console.log(fruits.indexOf("Guava"));//1
console.log(veggies.includes("Tomato"));//true
console.log(veggies.slice(1,3));//[ 'Bringal', 'Bottle guard' ]
console.log(veggies)//[ 'Tomato', 'Bringal', 'Bottle guard', 'Ladies Finger' ]
console.log(veggies.splice(1,3))//[ 'Bringal', 'Bottle guard', 'Ladies Finger' ]
console.log(veggies)//[ 'Tomato' ]

let arr = [1,2,3,[4,5,6],[7], [8,9,10]];
console.log(arr);//[ 1, 2, 3, [ 4, 5, 6 ], [ 7 ], [ 8, 9, 10 ] ]

console.log(arr.flat());
//  [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]
console.log(Array.from("Vallabh"))
// [
//   'V', 'a', 'l',
//   'l', 'a', 'b',
//   'h'
// ]
console.log(Array.isArray("vall"));
let score1 = 2;
let score2 = 3;
let score3 = 4;
console.log(Array.of(score1,score2,score3));
const newarrrr = [...fruits,...veggies];
console.log(newarrrr)
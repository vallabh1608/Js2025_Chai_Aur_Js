const piDescrib = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(piDescrib);
// Output: { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

class chai {
   constructor() {
      this.name = 'Malai_chai';
      this.price = 300;
   }
}
const mychai = new chai();
console.log(mychai.name);
console.log(mychai.price);
console.log(Object.getOwnPropertyDescriptor(mychai, 'name'));
// Output: { value: 'Malai_chai', writable: true, enumerable: true, configurable: true }
console.log(Object.defineProperty(mychai, 'name', {
   value: 'Masala_chai',
   writable: false,
   enumerable: false,
   configurable: true
}));
console.log(Object.getOwnPropertyDescriptor(mychai, 'name'));
mychai.name = 'Masala_chai';
console.log(mychai.name);



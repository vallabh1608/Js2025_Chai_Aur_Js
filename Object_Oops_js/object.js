function createUser(userName, price){
    this.price = price;
    this.userName = userName;
}
createUser.prototype.incrementPrice = function() {
    this.price++;
}
createUser.prototype.printMe = function(){
    console.log(`UserName : ${this.userName} , Price : ${this.price}`);
}
const tea = new createUser('Tea', 20);
const coffee = new createUser('Coffee', 30);
tea.printMe();
coffee.incrementPrice();
coffee.printMe();
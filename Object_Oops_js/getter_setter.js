class user{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password
    }
    
    get getName(){
        return `${this.name}`;
    }
    set setName(value){
        this.name = value;
    }
    get getPassword(){
        return `${this.password}%$*90`;
    }
    set setPassword(value){
        this.password = value;
    }
}
const apoorva = new user('Apoorva', 'apoorvakumargarina24@gmail.com','kumar@34_123');
console.log(apoorva);
console.log(apoorva.getName);
apoorva.setPassword = 'garinakumar@123';
console.log(apoorva.getPassword)
console.log(apoorva);


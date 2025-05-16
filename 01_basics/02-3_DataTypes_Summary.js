const Id = "123"
const newId = "123"
console.log(Id == newId); //TRUE
const SyId = Symbol("123")  //Symbol — that's guaranteed to be unique
const SynewId = Symbol("123")
console.log(SyId == SynewId); //FALSE  
const arrs = ["vallabh", 123, "kumar"]; 
console.log(arrs, "DataType = ", typeof arrs)
const obj = {
    name: "sai",
    age: 22,
    salary: 3452238
}
console.log(obj,"DataType = ", typeof obj);

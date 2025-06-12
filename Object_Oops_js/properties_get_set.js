function user(name, email, password) {
    this._name = name;
    this._email = email;   
    this._password = password;
    Object.defineProperty(this, 'name', {
        get: function(){
            return this._name;
        },
        set: function(value){
            this._name = value;
        }
    })
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email;
        },
        set: function(value){
            this._email = value;
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password;
        },
        set: function(value){
            this._password = value;
        }
    })
}
const varnika = new user('Varnika', 'varnika08@india.drreddys', 'varnika@123');
console.log(varnika.name);
console.log(varnika.email);
console.log(varnika.password);
varnika.name = 'Varnika Sharma';
console.log(varnika.name);

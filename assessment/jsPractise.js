let user = {
    name: "asd",
    age: "25",
    getUserDetails: function(){
        return this.name + this.age
    }
}


function greetUser(){
    console.log(this.name)
    return this.name
}



greetUser.call(user);

greetUser.apply(user)
// result()

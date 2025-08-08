class User{
    public name!: string;
    public age!: number;
    public address!: string;
    public gender!: String;


    public setName(name: string){
        this.name = name;
    }

    public getName(): string{
        return this.name;
    }


    public setAge(age: number){
        this.age = age;
    }

    public getAge(): number{
        return this.age;
    }

    public setAddress(address: string){
        this.address = address;
    }

    public getAddress(): string{
        return this.address;
    }

}

interface Builder{
    initaliseUser(): void;
    getUserDetails(): User;
}

class UserBuilder implements Builder {
    private user!: User;

    constructor(){
        this.initaliseUser();
    }

    public initaliseUser(){
        this.user = new User();
    }


    public getUserDetails() {
        return this.user;
    }


    public setName(name: string){
        this.user.name = name;
        return this;
    }


    public setAge(age: number){
        this.user.age = age;
        return this;
    }

    public setAddress(address: string){
        this.user.address = address;
        return this;
    }

}


const user = new UserBuilder().setName("Gowtham").setAddress("123").setAge(25)

const result = user.getUserDetails();

console.log(result.age)

/**
 * Builder pattern is used if lot of otional parameters,
 * 
 * i could have moved them to same class but it becomes hard to maintain
 * 
 * so using this
 */
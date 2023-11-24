class User {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }

    print(){
    console.log('Имя - ${this.name} возраст ${this.age}');
    }
}
    let user = new User('Умар', 14);

    user.print();
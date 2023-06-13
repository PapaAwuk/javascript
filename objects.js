
// let student={
//     name: 'Abigail Adis',
//     age:15,
//     gender:'Female',
//     class:'Primary 6'
// }

// //console.log (student.name)
// console.log(student['name'])

class Human{
    constructor(name, age){
        this.name = name;
        this.age =age;
    }
    talk(){
        console.log(this.name + "speaks");
    }
}
class Man extends Human{
    talk(){
        console.log(this.name + " Speaks English")
    }
}
let man = new Man('Albert Young');
man.talk();


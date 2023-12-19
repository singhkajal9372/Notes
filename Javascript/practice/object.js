// object creation by function
console.log("Hello JS")

function person(name,age){
    this.name = name;
    this.age = age;
}

var object = new person("kajal",23)
console.log(object.name)
console.log(object.age)

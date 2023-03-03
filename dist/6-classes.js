"use strict";
// Classes
class C1 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
class C2 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const person1 = new Person(1, "p1");
// Subclasses
class Employee extends Person {
    constructor(id, name, salary) {
        super(id, name);
        this.salary = salary;
    }
}
const emp1 = new Employee(3, "e1", 1000);

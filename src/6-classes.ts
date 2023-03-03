// Classes
class C1 {
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

class C2 {
  constructor(public name: string, public email: string) {}
}

interface PersonInterface {
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  private id: number;
  name: string;
  constructor(id: number, name: string) {
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
  salary: number;
  constructor(id: number, name: string, salary: number) {
    super(id, name);
    this.salary = salary;
  }
}
const emp1 = new Employee(3, "e1", 1000);

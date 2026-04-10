type UserType = {
  name: string;
  age: number;
  hello(): void;
};

class UserTwo implements UserType {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  hello(): void {
    console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
  }
}

const userTwo: UserType = new UserTwo("Алексей", 25);
userTwo.hello(); 
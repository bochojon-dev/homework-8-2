// console.log("Kamola");
// console.log("Maqsadjon");
// let arr: [number, string] = [19, "Kamola"];
// console.log(arr.splice(2));

// let add: (a: number, b: number) => number = (a: number, b: number): number =>
//   a + b;

// console.log("Natija: ", add(15, 21));

//  ------------- Encapsulation ------------------

// 1
// class Person {
//   name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   getName(): number {
//     return this.age;
//   }

//   birthday() {
//     this.age += 1;
//     console.log(
//       `Happy Birthday ${this.name}! You are now ${this.age} years old.`
//     );
//   }
// }
// let person: Person = new Person("Kamola", 19);
// person.birthday();

// 2
// class Car {
//   private make: string;
//    model: string;
//    fuelLevel: number;

//   constructor(make: string, model: string, fuelLevel: number = 100) {
//     this.make = make;
//     this.model = model;
//     this.fuelLevel = fuelLevel;
//   }

//   public getMake(): string {
//     return this.make;
//   }

//   public drive(distance: number) {
//     const fuelConsumed = distance / 10;
//     if (this.fuelLevel >= fuelConsumed) {
//       this.fuelLevel -= fuelConsumed;
//       console.log(
//         `Drove ${distance} km. Fuel level is now ${this.fuelLevel}%.`
//       );
//     } else {
//       console.log(`Not enough fuel to drive ${distance} km.`);
//     }
//   }
// }
// const myCar: Car = new Car("Toyota", "Corolla", 20);
// myCar.drive(50);

// 3
// class BankAccount {
//   private accountNumber: string;
//    balance: number;

//   constructor(accountNumber: string, initialBalance: number) {
//     this.accountNumber = accountNumber;
//     this.balance = initialBalance;
//   }

//   public deposit(amount: number): void {
//     if (amount > 0) {
//       this.balance += amount;
//       console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
//     } else {
//       console.log("Deposit amount must be positive.");
//     }
//   }

//   public withdraw(amount: number): void {
//     if (amount > 0 && amount <= this.balance) {
//       this.balance -= amount;
//       console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
//     } else {
//       console.log("Invalid withdrawal amount.");
//     }
//   }

//   public getBalance(): number {
//     return this.balance;
//   }
// }

// const myAccount = new BankAccount("123456789", 1000);
// myAccount.deposit(500);
// myAccount.withdraw(200);
// console.log(myAccount.getBalance());

// 4
// class Product {
//   private id: number;
//    name: string;
//   private price: number;

//   constructor(id: number, name: string, price: number) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }

//   public getPrice(): number {
//     return this.price;
//   }

//   public applyDiscount(discount: number): void {
//     if (discount > 0 && discount <= 100) {
//       this.price -= this.price * (discount / 100);
//       console.log(`Discount applied. New price is ${this.price}.`);
//     } else {
//       console.log("Invalid discount percentage.");
//     }
//   }
// }

// const product = new Product(1, "Laptop", 1000);
// console.log(product.getPrice());
// product.applyDiscount(10);

// 5
// class Library {
//   name: string;
//   private books: string[];

//   constructor(name: string) {
//     this.name = name;
//     this.books = [];
//   }

//   public getName(): string {
//     return this.name;
//   }

//   public addBook(book: string): void {
//     this.books.push(book);
//     console.log(`Book "${book}" added. Current books: ${this.books}`);
//   }

//   public findBook(book: string): boolean {
//     return this.books.includes(book);
//   }
// }

// const library = new Library("Central Library");
// library.addBook("Atomic Habits");
// console.log(library.findBook("Atomic Habits"));

// 6
// class LibraryMember {
//   private memberId: string;
//   borrowedBooks: string[];

//   constructor(memberId: string) {
//     this.memberId = memberId;
//     this.borrowedBooks = [];
//   }

//   public getMemberId(): string {
//     return this.memberId;
//   }

//   public borrowBook(book: string): void {
//     this.borrowedBooks.push(book);
//     console.log(
//       `Book "${book}" borrowed. Current borrowed books: ${this.borrowedBooks}`
//     );
//   }

//   public returnBook(book: string): void {
//     const index = this.borrowedBooks.indexOf(book);
//     if (index !== -1) {
//       this.borrowedBooks.splice(index, 1);
//       console.log(
//         `Book "${book}" returned. Current borrowed books: ${this.borrowedBooks}`
//       );
//     } else {
//       console.log(`Book "${book}" not found in borrowed books.`);
//     }
//   }
// }

// const member = new LibraryMember("Bochojon");
// member.borrowBook("1984");
// member.returnBook("1984");

// 7
// class Movie {
//   private title: string;
//   private director: string;
//   private ratings: number[];

//   constructor(title: string, director: string) {
//     this.title = title;
//     this.director = director;
//     this.ratings = [];
//   }

//   public getTitle(): string {
//     return this.title;
//   }

//   public addRating(rating: number): void {
//     if (rating >= 1 && rating <= 5) {
//       this.ratings.push(rating);
//       console.log(`Rating ${rating} added. Current ratings: ${this.ratings}`);
//     } else {
//       console.log("Rating must be between 1 and 5.");
//     }
//   }

//   public calculateAverageRating(): number {
//     const total = this.ratings.reduce((acc, rating) => acc + rating, 0);
//     return this.ratings.length ? total / this.ratings.length : 0;
//   }
// }

// const movie = new Movie("Avangers", "Joss Whedon");
// movie.addRating(5);
// movie.addRating(4);
// console.log(movie.calculateAverageRating());

// 8
// class Order {
//   private orderId: string;
//   items: { [key: string]: number };
//   status: string;

//   constructor(orderId: string) {
//     this.orderId = orderId;
//     this.items = {};
//     this.status = "Pending";
//   }

//   public getOrderId(): string {
//     return this.orderId;
//   }

//   public addItem(item: string, quantity: number): void {
//     if (quantity > 0) {
//       if (this.items[item]) {
//         this.items[item] += quantity;
//       } else {
//         this.items[item] = quantity;
//       }
//       console.log(
//         `Added ${quantity} of ${item}. Current items: ${JSON.stringify(
//           this.items
//         )}`
//       );
//     } else {
//       console.log("Quantity must be positive.");
//     }
//   }

//   public completeOrder(): void {
//     if (Object.keys(this.items).length > 0) {
//       this.status = "Completed";
//       console.log(`Order ${this.orderId} is completed. Status: ${this.status}`);
//     } else {
//       console.log("No items in the order to complete.");
//     }
//   }

//   public getStatus(): string {
//     return this.status;
//   }
// }

// const order = new Order("O12345");
// order.addItem("Apple", 3);
// order.addItem("Banana", 2);
// order.completeOrder();
// console.log(order.getStatus());

// 9
// class Course {
//   private courseId: string;
//   title: string;
//   studentsEnrolled: string[];
//   private capacity: number;

//   constructor(courseId: string, title: string, capacity: number) {
//     this.courseId = courseId;
//     this.title = title;
//     this.studentsEnrolled = [];
//     this.capacity = capacity;
//   }

//   public getCourseId(): string {
//     return this.courseId;
//   }

//   public enrollStudent(studentId: string): void {
//     if (this.studentsEnrolled.length < this.capacity) {
//       this.studentsEnrolled.push(studentId);
//       console.log(
//         `Student ${studentId} enrolled. Current students: ${this.studentsEnrolled}`
//       );
//     } else {
//       console.log("Course capacity reached.");
//     }
//   }

//   public dropStudent(studentId: string): void {
//     const index = this.studentsEnrolled.indexOf(studentId);
//     if (index !== -1) {
//       this.studentsEnrolled.splice(index, 1);
//       console.log(
//         `Student ${studentId} dropped. Current students: ${this.studentsEnrolled}`
//       );
//     } else {
//       console.log(`Student ${studentId} not found in course.`);
//     }
//   }

//   public getEnrollmentCount(): number {
//     return this.studentsEnrolled.length;
//   }
// }

// const course = new Course("CS101", "Introduction to Computer Science", 3);
// course.enrollStudent("S1");
// course.enrollStudent("S2");
// course.enrollStudent("S3");
// course.enrollStudent("S4");
// course.dropStudent("S2");
// console.log(course.getEnrollmentCount());

// 10
// class ShoppingCart {
//   private items: { [key: string]: number };
//   totalCost: number;

//   constructor() {
//     this.items = {};
//     this.totalCost = 0;
//   }

//   public addItem(item: string, quantity: number, price: number): void {
//     if (quantity > 0 && price > 0) {
//       if (this.items[item]) {
//         this.items[item] += quantity;
//       } else {
//         this.items[item] = quantity;
//       }
//       this.totalCost += quantity * price;
//       console.log(
//         `Added ${quantity} of ${item}. Total cost is ${this.totalCost}.`
//       );
//     } else {
//       console.log("Quantity and price must be positive.");
//     }
//   }

//   public removeItem(item: string, quantity: number, price: number): void {
//     if (
//       quantity > 0 &&
//       price > 0 &&
//       this.items[item] &&
//       this.items[item] >= quantity
//     ) {
//       this.items[item] -= quantity;
//       this.totalCost -= quantity * price;
//       console.log(
//         `Removed ${quantity} of ${item}. Total cost is ${this.totalCost}.`
//       );
//       if (this.items[item] === 0) {
//         delete this.items[item];
//       }
//     } else {
//       console.log("Invalid quantity or item not found.");
//     }
//   }

//   public getTotalCost(): number {
//     return this.totalCost;
//   }

//   public listItems(): void {
//     console.log("Current items in cart:", this.items);
//   }
// }

// const cart = new ShoppingCart();
// cart.addItem("Apple", 4, 1);
// cart.addItem("Banana", 2, 0.5);
// cart.removeItem("Apple", 1, 1);
// cart.listItems();
// console.log(cart.getTotalCost());

// ============================================

//  ------------- Inheritance --------------------

// // 1
// class Shape {
//   protected color: string;

//   constructor(color: string) {
//     this.color = color;
//   }

//   public getColor(): string {
//     return this.color;
//   }
// }

// class Circle extends Shape {
//   private radius: number;

//   constructor(color: string, radius: number) {
//     super(color);
//     this.radius = radius;
//   }

//   public getArea(): number {
//     return Math.round(Math.PI * Math.pow(this.radius, 2));
//   }
// }

// const circle = new Circle("red", 5);
// console.log(circle.getColor());
// console.log(circle.getArea());

// // 2
// class Device {
//   protected manufacturer: string;

//   constructor(manufacturer: string) {
//     this.manufacturer = manufacturer;
//   }

//   public getManufacturer(): string {
//     return this.manufacturer;
//   }
// }

// class Smartphone extends Device {
//   private model: string;
//   private os: string;

//   constructor(manufacturer: string, model: string, os: string) {
//     super(manufacturer);
//     this.model = model;
//     this.os = os;
//   }

//   public getSmartphoneDetails(): string {
//     return `Manufacturer: ${this.getManufacturer()}, Model: ${
//       this.model
//     }, OS: ${this.os}`;
//   }
// }

// const smartphone = new Smartphone("Apple", "iPhone 12", "iOS");
// console.log(smartphone.getSmartphoneDetails());

// // 3
// class Appliance {
//   protected brand: string;

//   constructor(brand: string) {
//     this.brand = brand;
//   }

//   public getBrand(): string {
//     return this.brand;
//   }
// }

// class Refrigerator extends Appliance {
//   private capacity: number;

//   constructor(brand: string, capacity: number) {
//     super(brand);
//     this.capacity = capacity;
//   }

//   public getRefrigeratorDetails(): string {
//     return `Brand: ${this.getBrand()}, Capacity: ${this.capacity}L`;
//   }
// }

// const refrigerator = new Refrigerator("LG", 300);
// console.log(refrigerator.getRefrigeratorDetails());

// // 4
// class Employee {
//   protected name: string;
//   protected position: string;

//   constructor(name: string, position: string) {
//     this.name = name;
//     this.position = position;
//   }

//   public getDetails(): string {
//     return `${this.name}, Position: ${this.position}`;
//   }
// }

// class Engineer extends Employee {
//   private field: string;

//   constructor(name: string, position: string, field: string) {
//     super(name, position);
//     this.field = field;
//   }

//   public getEngineerDetails(): string {
//     return `${this.getDetails()}, Field: ${this.field}`;
//   }
// }

// const engineer = new Engineer(
//   "David",
//   "Software Engineer",
//   "Backend Development"
// );
// console.log(engineer.getEngineerDetails());

// // 5
// class Game {
//   protected name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   public getName(): string {
//     return this.name;
//   }
// }

// class Chess extends Game {
//   private numberOfPlayers: number;

//   constructor(name: string, numberOfPlayers: number) {
//     super(name);
//     this.numberOfPlayers = numberOfPlayers;
//   }

//   public getChessDetails(): string {
//     return `Name: ${this.getName()}, Players: ${this.numberOfPlayers}`;
//   }
// }

// const chess = new Chess("Chess", 2);
// console.log(chess.getChessDetails());

// // 6
// class LibraryItem {
//   protected title: string;

//   constructor(title: string) {
//     this.title = title;
//   }

//   public getTitle(): string {
//     return this.title;
//   }
// }

// class Book extends LibraryItem {
//   private author: string;

//   constructor(title: string, author: string) {
//     super(title);
//     this.author = author;
//   }

//   public getBookDetails(): string {
//     return `Title: ${this.getTitle()}, Author: ${this.author}`;
//   }
// }

// const book = new Book("1984", "George Orwell");
// console.log(book.getBookDetails());

// // 7
// class Instrument {
//   protected type: string;

//   constructor(type: string) {
//     this.type = type;
//   }

//   public getType(): string {
//     return this.type;
//   }
// }

// class Guitar extends Instrument {
//   private numberOfStrings: number;

//   constructor(type: string, numberOfStrings: number) {
//     super(type);
//     this.numberOfStrings = numberOfStrings;
//   }

//   public getGuitarDetails(): string {
//     return `Type: ${this.getType()}, Strings: ${this.numberOfStrings}`;
//   }
// }

// const guitar = new Guitar("Acoustic", 6);
// console.log(guitar.getGuitarDetails());

// // 8
// class Person {
//   protected name: string;
//   protected age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   public getDetails(): string {
//     return `${this.name}, Age: ${this.age}`;
//   }
// }

// class Student extends Person {
//   private grade: string;

//   constructor(name: string, age: number, grade: string) {
//     super(name, age);
//     this.grade = grade;
//   }

//   public getStudentDetails(): string {
//     return `${this.getDetails()}, Grade: ${this.grade}`;
//   }
// }

// const student = new Student("Maqsadjon", 19, "10th");
// console.log(student.getStudentDetails());

// // 9
// class Animal {
//   protected species: string;

//   constructor(species: string) {
//       this.species = species;
//   }

//   public getSpecies(): string {
//       return this.species;
//   }
// }

// class Dog extends Animal {
//   private breed: string;

//   constructor(species: string, breed: string) {
//       super(species);
//       this.breed = breed;
//   }

//   public getDogDetails(): string {
//       return `Species: ${this.getSpecies()}, Breed: ${this.breed}`;
//   }
// }

// const dog = new Dog('Canine', 'Labrador');
// console.log(dog.getDogDetails());

// // 10
// class Vehicle {
//   protected make: string;
//   protected model: string;

//   constructor(make: string, model: string) {
//     this.make = make;
//     this.model = model;
//   }

//   public getDetails(): string {
//     return `${this.make} ${this.model}`;
//   }
// }

// class Car extends Vehicle {
//   private doors: number;

//   constructor(make: string, model: string, doors: number) {
//     super(make, model);
//     this.doors = doors;
//   }

//   public getCarDetails(): string {
//     return `${this.getDetails()} with ${this.doors} doors`;
//   }
// }

// const car = new Car("Toyota", "Corolla", 4);
// console.log(car.getCarDetails());

// =====================================
// ------------------ Polymorphism ----------------

class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public makeSound() {
    return `${this.name} vov`;
  }
}

class Dog extends Animal {
  makeSound() {
    return `${this.name}: vov vov`;
  }
}
let dog: Dog = new Dog("Bobby");
console.log(dog);

class Cat extends Animal {
  makeSound() {
    return `${this.name}: miyov`;
  }
}
let cat: Cat = new Cat("Catty");
console.log(cat.makeSound());

// =========================

// ----------------- Abstraction -------------------

abstract class Shape {
  abstract calculatePerimeter(): number;
}

class Rect extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

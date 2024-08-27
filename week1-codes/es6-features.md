# ES6 features for React Native

- **1. Arrow Functions:** Arrow functions provide a concise syntax for writing functions and also have a different behavior when it comes to handling the this keyword.

Traditional function

```TypeScript
function greet(name: string) {
  return `Hello, ${name}`;
}
```

Arrow function

```TypeScript
const greet2 = (name: string) => `Hello, ${name}`;
```

- **2. Template Literals:** Template literals are a feature in ES6 that allow you to embed expressions in strings. Instead of using concatenation or string interpolation, you can enclose the string in backticks (`) and insert variables or expressions using ${}. This makes it easier to create dynamic strings.

```TypeScript
const userName = "Ruddy";
const age = 30;

const message = `Hello, my name is ${userName} and I am ${age} years old.`;
```

- **3. Destructuring:** Destructuring is a way to extract values from arrays or objects and assign them to variables in a more concise way. It helps you access specific elements or properties without writing lengthy code.

* Object destructuring

```TypeScript
const user = {
  name: "Jane",
  age: 25,
  location: "New York",
};

const { name, age } = user;
```

- Array destructuring

```TypeScript
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
```

- **4. Spread and Rest Operators:** The spread operator (...) allows you to expand an iterable (like an array or a string) into individual elements. It is useful for creating copies of arrays, merging arrays, or passing multiple arguments to a function. The rest operator (...) is used to gather multiple elements into an array. It is helpful when you want to pass a variable number of arguments to a function.

* Spread operators with arrays

```TypeScript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObj = { ...obj1, ...obj2 };
```

- Rest Operators

```TypeScript
function introduceYourself(name: string, ...hobbies: string[]) {
  console.log(`Hi, I am ${name}, My hobbies are ${hobbies}`);
}

introduceYourself("Alice", "reading", " painting", " coding", " swimming");
```

- **5. Default Parameters:** Default parameters allow you to set default values for function parameters. If a parameter is not provided when the function is called, the default value will be used instead. This helps make functions more flexible and reduces the need for excessive conditional checks.

```TypeScript
const multiply = (a: number, b: number = 2) => {
  return a + b;
};

  console.log(multiply(3));
  console.log(multiply(4));
```

- **6. Classes and Inheritance:** Classes provide a way to create reusable blueprints for objects. They encapsulate data and behavior into a single entity. Inheritance allows you to create a new class based on an existing class, inheriting its properties and methods. This promotes code reuse and helps in creating more organized and maintainable code.

```TypeScript
class Animal {
 name: string;

 constructor(name: string) {
  this.name = name;
 }

 speak() {
  console.log(`$(this.name) makes a noise.`);
  }
 }

 class Dog extends Animal {
  speaks() {
    console.log(`${this.name} barks`);
  }
 }

 class Cat extends Animal {
  speaks() {
    console.log(`${this.name} meows`);
  }
 }

const dog = new Dog("Rex");
dog.speaks();

const cat = new Cat("Tom");
cat.speaks();
```

- **7. Promises and Async/Await:** Promises are a way to handle asynchronous operations in JavaScript. They represent the eventual completion (or failure) of an asynchronous operation and allow you to chain multiple asynchronous operations together. Async/await is a syntax sugar built on top of promises that makes asynchronous code look more like synchronous code, making it easier to read and write.

* Promises

```TypeScript
 const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 4000);
  });
 };

 fetchData().then((data) => console.log(data));
```

- Async/Await

```TypeScript
 const fetchAsyncData = async () => {
  const data = await fetchData();
  console.log(data);
 };

 fetchAsyncData();
```

- **8. Modules and Import/Export:** Modules are a way to organize and reuse code in JavaScript. They allow you to split your code into separate files, each containing specific functionality. The import/export syntax is used to import functionality from other modules or export functionality from the current module. This helps in creating modular and maintainable codebases.

```TypeScript
console.log("addition: ", add(5, 3));
console.log("subtraction", subtract(5, 3));
```

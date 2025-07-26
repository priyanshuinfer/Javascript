# 🧠 JavaScript and OOP Notes

## 🟡 What is an Object?

- A **collection of properties** (key-value pairs) and **methods** (functions).
- Example:

  ```js
  const person = {
    name: "Priyanshu",
    greet: function() {
      console.log("Hello!");
    }
  };
  ```

- Using `.toLowerCase()` method:

  ```js
  const str = "HELLO";
  console.log(str.toLowerCase()); // Output: hello
  ```

---

## 🟢 Why Use OOP?

- Organize code using **real-world models**.  
- Reuse code with **inheritance**.  
- Make code **modular** and **maintainable**.  

---

## 🧱 Core Concepts of OOP in JavaScript

### 🔸 Object Literals

```js
const car = {
  brand: "Tesla",
  model: "Model 3",
  start() {
    console.log("Starting car...");
  }
};
```

---

### 🔸 Constructor Functions

```js
function Student(name, age) {
  this.name = name;
  this.age = age;
  this.intro = function() {
    console.log(`Hi, I am ${this.name}`);
  };
}

const s1 = new Student("Priyanshu", 21);
s1.intro(); // Hi, I am Priyanshu
```

---

### 🔸 Classes (ES6 Syntax)

```js
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  intro() {
    console.log(`Hi, I am ${this.name}`);
  }
}

const s2 = new Student("Raj", 22);
s2.intro(); // Hi, I am Raj
```

---

### 🔸 Inheritance

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog1 = new Dog("Tommy");
dog1.speak(); // Tommy barks
```

---

### 🔸 `this` Keyword

- Refers to the **current object** in context.

```js
const user = {
  name: "Priyanshu",
  showName() {
    console.log(this.name);
  }
};

user.showName(); // Priyanshu
```

---

### 🔸 Encapsulation with Closures (Private Variables)

```js
function Counter() {
  let count = 0; // private

  this.increment = function() {
    count++;
    console.log(count);
  };
}

const c = new Counter();
c.increment(); // 1
c.increment(); // 2
```

---

### 🔸 Static Methods

```js
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 3)); // 8
```

---

## ✅ Summary

- **Objects** store properties and methods.  
- **Constructor functions** and **classes** are used to create templates.  
- **Inheritance** allows extending functionality.  
- **Encapsulation** hides internal state.  
- `this` refers to the calling context.  

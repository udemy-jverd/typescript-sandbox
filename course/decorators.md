# Typescript

## Decorators

First class decorator:

```ts
function Logger(constructor: Person) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();
console.log(pers);
```

Decorator factories:

```ts
const Logger = (Log: string) => (constructor: Person) => {
  console.log(Log);
  console.log(constructor);
};

@Logger("Logging person")
class Person {
  name = "Bob";

  constructor() {
    console.log("Creating person object");
  }
}

const person = new Person();
console.log(person);
```

Another example, more concrete:

```ts
const WithTemplate =
  (template: string, hookId: string) => (constructor: any) => {
    const element = document.getElementById(hookId);
    const person = new constructor("Bob");
    if (element) {
      element.innerHTML = template;
      element.querySelector("h1")!.textContent = person.name;
    }
  };

@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "";

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("Max");
console.log(person);
```

# Typescript

## Decorators

Decorator function:

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

```ts
const Logger = (target: any, property: string | symbol) => {
  console.log(target);
  console.log(property);
};

class Product {
  @Logger
  private title: string;
  private price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  public setPrice(price: number): void {
    if (price > 0) {
      this.price = price;
    }
  }

  public getPriceWithTaxe(tax: number): number {
    return this.price * (1 + tax);
  }
}

const tesla = new Product("Tesla", 128000);
console.log(tesla);
```

```ts
const Logger = (target: any, name: string, descriptor: any) => {
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

class Product {
  private title: string;
  private price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  public setPrice(price: number): void {
    if (price > 0) {
      this.price = price;
    }
  }

  @Logger
  public getPriceWithTaxe(tax: number): number {
    return this.price * (1 + tax);
  }
}

const tesla = new Product("Tesla", 128000);
console.log(tesla);
```

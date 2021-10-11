# Typescript

## Advanced types

Intersection type:

```ts
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type AdminEmployee = Admin & Employee;

const user: AdminEmployee = {
  name: "Bob",
  privileges: ["read", "write"],
  startDate: new Date(),
};
```

Types guards:

```ts
const test = "";

typeof test === "string";
"privileges" in test;
test instanceof Truck;
```

Type casting:

```ts
const userInput = <HTMLInputElement>document.getElementById("user-input"); // JS
const userInput = document.getElementById("user-input") as HTMLInputElement; // REACT
```

Index properties:

```ts
interface ErrorContainer {
  [prop: string]: string; // every property must be of type "string"
}
const errorBag: ErrorContainer = { email: "" };
```

Optional chaining:

```ts
const fetchedUser = {
  id: "id",
  name: "Bob",
  job: { title: "manager", description: "handle team" },
};
console.log(fetchedUser?.job?.title);
```

Nullish coalescing:

```ts
const userInput = "";
// const storedInput = userInput || 'DEFAULT';
const storedInput = userInput ?? "DEFAULT"; // if `null` or `undefined`, use the fallback value
console.log(storedInput);
```

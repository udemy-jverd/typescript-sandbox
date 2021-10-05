# Typescript

## Types

- number: 1, 5.3, -2
- string: 'Hi', "Hi", `Hi`
- boolean: true, false
- objects: { age: 28 }
- Function

Variables:

```ts
// DO NOT WRITE THIS
const num1: 5 = 5;
let num2: number = 6;
const names: string[] = ["Jo", "Ju"];
const random: any[] = [28, "Jo"];
const object: { age: number } = { age: 28 };
```

Functions:

```ts
const toTypes = (arg1: string, arg2: number, arg3: boolean) => {
  return;
};
```

Tuple Arrays: `Fixed lenght & type array`

```ts
const role: [number, string] = [2, "author"];
```

Enums:

```ts
enum Role {
  READ,
  READ_WRITE,
}

console.log(Role.READ_WRITE); // default returns 0
console.log(Role.READ_WRITE); // default returns 1

enum Role {
  READ = 1,
  READ_WRITE = 2,
}
```

Union Types:

```ts
const union = (arg: number | string) => {
  return arg;
};
```

Literal Types:

```ts
const union = (arg: "number" | "text") => {
  return arg;
};
```

Aliases:

```ts
type Person = {
  name: string;
  age: number;
};

const getPerson = (person: Person) => {
  return person;
};
```

Function return types:

```ts
const add = (a: number, b: number): number => {
  return a + b;
};

const log = (a: string): void => {
  console.log(`Result: ${a}`);
};
```

functions as type:

```ts
let add: Function;
let substract: (a: number, b: number) => number;
```

callback functions:

```ts
const add = (a: number, b: number, cb: (result: number) => void): void => {
  const c = a + b;
  cb(c);
};

add(1, 2, (number) => {
  console.log(number);
});
```

`never` type:

```ts
const error = (message: string, code: number): never => {
  throw { message, code };
};
error("New error!", 500);
```

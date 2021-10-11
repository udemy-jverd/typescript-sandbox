# Typescript

## Generics

### Functions

First example:

```ts
// const names: string[] = ['Bob', 'Charlie'];
const names: Array<string> = ["Bob", "Charlie"];
console.group(names);

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved!");
  }, 2000);
});
console.log(promise);
```

```ts
function merge<T, U>(a: T, b: U) {
  return Object.assign(a, b);
}
const mergeResult = merge({ name: "Bob" }, { age: 28 });
console.log(mergeResult);
```

Type constraints:

```ts
function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}
const mergeResult = merge({ name: "Bob" }, { age: 28 });
console.log(mergeResult);
```

Generic function:

```ts
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = "Got not value";
  if (element.length > 0) {
    description = `Got ${element.length} element(s)`;
  }
  return [element, description];
}

console.log(countAndDescribe("Hello there!"));
```

`keyof` constraint:

```ts
function extractAndConvert<T extends object, U extends keyof T>(
  object: T,
  key: U
) {
  return object[key];
}
const result = extractAndConvert({ name: "Bob", age: 28 }, "name");
console.log(result);
```

### Classes

```js
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    public addItem(item: T) {
        this.data.push(item);
    }

    public removeitem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    public getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Bob');
textStorage.addItem('Charlie');
console.log(textStorage.getItems());


const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
console.log(numberStorage.getItems());
```

### Generic utility types

Partials:

```ts
interface ICourseGoal {
  title: string;
  description: string;
  completed: Date;
}

function CreateCourseGoal(title: string, description: string, completed: Date) {
  const courseGoal: Partial<ICourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completed = completed;
  return courseGoal;
}
```

Readonly:

```ts
const names: Readonly<string[]> = ["Bob", "Charlie"];
names.push("Ed"); // Throw an error because Readonly does not allow us to modify the object
console.log(names);
```

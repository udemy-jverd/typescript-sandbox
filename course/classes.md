# Typescript

## Classes & interfaces

Exemple of a base classe inherited by two sub classes using different properties scopes:

```ts
class Department {
  private readonly name: string = "";
  protected employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public describe() {
    console.log(`Department: ${this.name}`);
  }

  public hireEmployee(employee: string) {
    this.employees.push(employee);
  }

  public countEmployees() {
    console.log(`Employees count: ${this.employees.length}`);
  }
}

class ITDepartment extends Department {
  private admin: string[] = [];

  constructor(name: string, admin: string[]) {
    super(name);
    this.admin = admin;
  }
}

class AccountingDepartment extends Department {
  private reports: string[] = [];

  constructor(name: string, reports: string[]) {
    super(name);
    this.reports = reports;
  }

  public getReports() {
    return this.reports;
  }

  public setReports(reports: string[]) {
    this.reports = reports;
  }

  public createReport(report: string) {
    this.reports.push(report);
  }

  public printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("IT", ["Max", "Bob"]);
it.hireEmployee("Max");
it.hireEmployee("Bob");
it.countEmployees();
```

Static methods & properties:

```ts
class Tools {
  static random: () => number = Math.random;

  static MathPi() {
    return Math.PI;
  }
}

console.log(Tools.random);
console.log(Tools.MathPi);
```

Abstract classe:

```ts
abstract class Tool {
  abstract test(): void;
}

class MathTool extends Tool {
  private random: string = "";

  constructor(random: string) {
    super();
    this.random = random;
  }
  test() {
    console.log("test");
  }
}
```

Interface applied to an object:

```ts
interface IPerson {
  name: string;
  age: number;

  sing(words: string): void;
}

const user: IPerson = {
  name: "Bobby",
  age: 28,
  sing(words: string) {
    console.log(words);
  },
};

user.sing("Hello there");
```

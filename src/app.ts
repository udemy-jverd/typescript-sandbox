class Department {
    private name: string = '';
    private employees: string[] = [];

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

const accounting = new Department('Accounting');
accounting.hireEmployee('Max');
accounting.hireEmployee('Bob');
accounting.countEmployees();

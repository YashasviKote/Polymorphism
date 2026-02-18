class Employee {
    calculateSalary() {
        return 0;
    }
}

class Developer extends Employee {
    constructor(base, bonus) {
        super();
        this.base = base;
        this.bonus = bonus;
    }

    calculateSalary() {
        return this.base + this.bonus;
    }
}

class Manager extends Employee {
    constructor(base, allowance) {
        super();
        this.base = base;
        this.allowance = allowance;
    }

    calculateSalary() {
        return this.base + this.allowance;
    }
}

function calculate() {
    let type = document.getElementById("type").value;
    let base = Number(document.getElementById("base").value);
    let extra = Number(document.getElementById("extra").value);

    let emp; // parent reference

    if (type === "dev")
        emp = new Developer(base, extra);
    else
        emp = new Manager(base, extra);

    document.getElementById("result").innerText =
        "Total Salary: " + emp.calculateSalary();
}

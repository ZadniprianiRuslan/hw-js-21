const employeesSalary = {
    employees: [
        {
            name: "Igor",
            salary: 3000,
        },
        {
            name: "Olga",
            salary: 4000,
        },
        {
            name: "Stepan",
            salary: 5000
        },
    ],

    countTotalSalary() {
        let totalSalary = 0;
        const employeAr = this.employees;
        for(const employeeSalary of employeAr) {
            totalSalary = totalSalary + employeeSalary.salary;
            const massage = employeeSalary.name + ": " + employeeSalary.salary;
            console.log(massage);
        }
        return totalSalary
    }
}

employeesSalary.countTotalSalary();
const totalPrize = employeesSalary.countTotalSalary();
console.log(totalPrize);


const copyOfEmployees = [...employeesSalary.employees];
console.log(copyOfEmployees);
const employeesHome = {
    employees: [
        {
            name: "Sergio",
            rating: 9,
        },
        {
            name: "Dmytro",
            rating: 8,
        },
        {
            name: "Petro",
            rating: 10,
        },
    ],

    findBestEmployee() {
        const employeAr = this.employees;
        let maxRating = 0;
       for(const employe of employeAr) {
        if(employe.rating > maxRating) {
            maxRating = employe.rating;
        }
       }
       return maxRating
    }
}
employeesHome.findBestEmployee();
const bestEmployee = employeesHome.findBestEmployee();
console.log(bestEmployee);


const copyOfEmployees = [...employeesHome.employees];
console.log(copyOfEmployees);


const [employee1, employee2, employee3] = employeesHome.employees;
console.log(employee1);
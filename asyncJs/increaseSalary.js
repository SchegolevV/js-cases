function increaseSalary() {
  return new Promise((resolve) => {
    api
      .getEmployees() 
      .then((employees) =>
        employees.reduce(
          (acc, current) => (acc.salary > current.salary ? current : acc),
          { salary: Number.MAX_VALUE }
        )
      )
      .then((lowest) => {
        let newSalary = lowest.salary * 1.2;
        return api.setEmployeeSalary(lowest.id, newSalary)
      }) 
      .then((uppedEmployee) => {
        let text = `Hello, ${uppedEmployee.name}! Congratulations, your new salary is ${uppedEmployee.salary}!`;
        resolve(api.notifyEmployee(uppedEmployee.id, text))
      }) 
      .catch((error) => {
        console.log(error);
        resolve(!api.notifyAdmin(error));
      })
  });
}

const api = {
  _employees: [
    { id: 1, name: "Alex", salary: 112000 },
    { id: 2, name: "Fred", salary: 110000 },
    { id: 3, name: "Bob", salary: 80000 },
  ],

  getEmployees() {
    return new Promise((resolve) => {
      resolve(this._employees.slice());
    });
  },

  setEmployeeSalary(employeeId, newSalary) {
    return new Promise((resolve) => {
      this._employees = this._employees.map((employee) =>
        employee.id !== employeeId
          ? employee
          : {
              ...employee,
              salary: newSalary,
            }
      );
      resolve(this._employees.find(({ id }) => id === employeeId));
    });
  },

  notifyEmployee(employeeId, text) {
    return new Promise((resolve) => {
      resolve(true);
    });
  },

  notifyAdmin(error) {
    return new Promise((resolve) => {
      resolve(true);
    });
  },

  setEmployees(newEmployees) {
    return new Promise((resolve) => {
      this._employees = newEmployees;
      resolve();
    });
  },
};

increaseSalary();

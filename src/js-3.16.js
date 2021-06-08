function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const salaryM = Object.values(salaries);
  for (const oneSalary of salaryM) {
  totalSalary += oneSalary;
  }
  // Change code above this line
  return totalSalary;
}
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))
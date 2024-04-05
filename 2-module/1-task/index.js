function sumSalary(salaries) {
  let sumS = 0;
  for (const key in salaries) {
    if (salaries[key] === parseInt(salaries[key])) sumS += salaries[key];
  }
  return sumS;
}

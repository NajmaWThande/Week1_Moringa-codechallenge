
function calculateSalary(basicSalary, benefits){
    //calculate grossSalary
  const grossSalary = basicSalary + benefits;
  
  //calculate payeeTax
  let payeeTax;
  if(grossSalary <= 24000){
      payeeTax = 0.1 * grossSalary;
  }else if(grossSalary <= 32333){
      payeeTax = 2400 + 0.25 * (grossSalary - 24000);
  }
  else{
      payeeTax = 0.3 * grossSalary;
  }
  
  //calculate NHIF deduction
  let nhifDeduction;
  
  if (grossSalary <= 5999) {
    nhifDeduction = 150;
  } else if (grossSalary <= 7999) {
    nhifDeduction = 300;
  } else if (grossSalary <= 11999) {
    nhifDeduction = 400;
  } else if (grossSalary <= 14999) {
    nhifDeduction = 500;
  } else if (grossSalary <= 19999) {
    nhifDeduction = 600;
  } else if (grossSalary <= 24999) {
    nhifDeduction = 750;
  } else if (grossSalary <= 29999) {
    nhifDeduction = 850;
  } else if (grossSalary <= 34999) {
    nhifDeduction = 900;
  } else if (grossSalary <= 39999) {
    nhifDeduction = 950;
  } else if (grossSalary <= 44999) {
    nhifDeduction = 1000;
  } else if (grossSalary <= 49999) {
    nhifDeduction = 1100;
  } else if (grossSalary <= 59999) {
    nhifDeduction = 1200;
  } else if (grossSalary <= 69999) {
    nhifDeduction = 1300;
  } else if (grossSalary <= 79999) {
    nhifDeduction = 1400;
  } else if (grossSalary <= 89999) {
    nhifDeduction = 1500;
  } else if (grossSalary <= 99999) {
    nhifDeduction = 1600;
  } else {
    return 'invalid input'
  }
  
  //calculate NSSF deducction
  let nssfDeduction = 0.06 * basicSalary
  
  //netSalary calculation
  let netSalary = grossSalary - payeeTax - nhifDeduction - nssfDeduction;
  
  //return all calculated values
  return { grossSalary, payeeTax, nhifDeduction, nssfDeduction, netSalary};
  }
  function displaySalary() {
    const basicSalary = parseInt(prompt("Enter Basic Salary: "));
    const benefits = parseInt(prompt("Enter Benefits: "));
  
    const salary = calculateSalary(basicSalary, benefits);
  
   
  document.getElementById("grossSalary").innerText = `Gross Salary: ${salary.grossSalary}`;
  document.getElementById("payeeTax").innerText = `Payee Tax: ${salary.payeeTax}`;
  document.getElementById("nhifDeduction").innerText = `NHIF Contribution: ${salary.nhifDeduction}`;
  document.getElementById("nssfDeduction").innerText = `NSSF Deduction: ${salary.nssfDeduction}`;
  document.getElementById("netSalary").innerText = `Net Salary: ${salary.netSalary}`;
  }
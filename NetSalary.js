// Function to calculate Payee
function calculatePayee(grossSalary) {
  let payee = 0;
  if (grossSalary <= 24000) {
    payee = grossSalary * (10 / 100);
  } else if (grossSalary > 24000 && grossSalary <= 32333) {
    payee = (grossSalary - 24000) * (25 / 100);
  } else if (grossSalary < 32333 && grossSalary <= 500000) {
    payee = (grossSalary - 32333) * (30 / 100);
  } else if (grossSalary < 500000 && grossSalary <= 800000) {
    payee = (grossSalary - 500000) * (32 / 100);
  } else {
    payee = (grossSalary - 800000) * (35 / 100);
  }
  return payee;
}

// Function for calculating NHIF
function calculateNHIF(grossSalary) {
  let nhif = 0;
  switch (grossSalary) {
    case grossSalary <= 5999:
      nhif = 150;
      break;
    case grossSalary <= 7999:
      nhif = 300;
      break;
    case grossSalary <= 11999:
      nhif = 400;
      break;
    case grossSalary <= 14999:
      nhif = 500;
      break;
    case grossSalary <= 19999:
      nhif = 600;
      break;
    case grossSalary <= 24999:
      nhif = 750;
      break;
    case grossSalary <= 29999:
      nhif = 850;
      break;
    case grossSalary <= 34999:
      nhif = 900;
      break;
    case grossSalary <= 39999:
      nhif = 950;
      break;
    case grossSalary <= 44999:
      nhif = 1000;
      break;
    case grossSalary <= 49999:
      nhif = 1100;
      break;
    case grossSalary <= 59999:
      nhif = 1200;
      break;
    case grossSalary <= 69999:
      nhif = 1300;
      break;
    case grossSalary <= 79999:
      nhif = 1400;
      break;
    case grossSalary <= 89999:
      nhif = 1500;
      break;
    default:
      nhif = 1700;
  }
  return nhif;
}

// Function for NSSF
function calculateNSSF(basicSalary) {
  return basicSalary * 0.1;
}

//function for net salary
function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const payee = calculatePayee(grossSalary);
  const nhif = calculateNHIF(grossSalary);
  const nssf = calculateNSSF(basicSalary);
  const deductibles = payee + nhif + nssf;
  const netSalary = grossSalary - deductibles;

  return {
    grossSalary,
    payee,
    nhif,
    nssf,
    netSalary,
  };
}

const basicSalary = 50000;
const benefits = 10000;
const result = calculateNetSalary(basicSalary, benefits);

console.log(result.grossSalary);
console.log(result.payee);
console.log(result.nhif);
console.log(result.nssf);
console.log(result.netSalary);

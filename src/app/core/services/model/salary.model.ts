export interface SalaryInput {
  basic: number;
  hra: number;
  allowances: number;
  pf: number;
  professionalTax: number;
}



export interface SalaryCTCInput {
  ctc: number;
}

export interface SalaryBreakdown {
  basic: number;
  epf: number;
  gratuity: number;
  professionalTax: number;
  standardDeduction: number;
  taxableIncome: number;
  incomeTax: number;
  inHandSalary: number;
}

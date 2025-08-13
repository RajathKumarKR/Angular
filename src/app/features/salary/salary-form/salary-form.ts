import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalaryService } from '../../../core/salary.service';
import { CommonModule } from '@angular/common';
import { SalaryBreakdown } from '../../../core/services/model/salary.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salary-form',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './salary-form.html',
  styleUrl: './salary-form.css'
})
export class SalaryFormComponent {
  form: FormGroup;
  netSalary: number | null = null;

  constructor(private fb: FormBuilder, private salaryService: SalaryService, private router:Router) {
    this.form = this.fb.group({
      basic: [0],
      hra: [0],
      allowances: [0],
      pf: [0],
      professionalTax: [0]
    });
  }


  ctc: number = 0;
  result?: SalaryBreakdown;

  salary:number = 0;
  years:number = 0;
  gratuity: number = 0;


  calculate() {
    this.netSalary = this.salaryService.calculateNetSalary(this.form.value);
  }

  calculateSalary() {
    this.result = this.salaryService.calculateSalary(this.ctc);
    console.log('Salary Breakdown:', this.result);
  }

  calculateGratuity() {
    this.gratuity = this.salaryService.calculateGratuity(this.salary, this.years);
    console.log('Gratuity:', this.gratuity);
  }

  addTask(){
    this.router.navigate(['/tasks/new']);
  }
  
}

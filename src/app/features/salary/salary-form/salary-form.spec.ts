import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryFormComponent } from './salary-form';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

fdescribe('SalaryFormComponent', () => {
  let component: SalaryFormComponent;
  let fixture: ComponentFixture<SalaryFormComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryFormComponent,ReactiveFormsModule,FormsModule, CommonModule]

    })
    .compileComponents();
   
    fixture = TestBed.createComponent(SalaryFormComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder)
     component.form = fb.group({
       basic: 5000,
       hra: 1000,
       allowances:0,
       pf:0,
       professionalTax:0
     });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate salary correctly', () => {
    component.calculate();
    expect(component.netSalary).toBe(6000);
  });

    it('should calculate gratuity correctly', () => {
      component.salary = 30000;
      component.years = 5;
      component.calculateGratuity();
      expect(component.gratuity).toBe(86538); // 30000 * 15 / 26 * 5
  });
});

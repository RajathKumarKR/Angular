import { Injectable } from "@angular/core";
import { SalaryBreakdown, SalaryInput } from "./services/model/salary.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SalaryService {
    calculateNetSalary(input: SalaryInput): number {
        const gross = input.basic + input.hra + input.allowances;
        const deductions = input.pf + input.professionalTax + this.calculateIncomeTax(gross);
        return gross - deductions;
    }

    calculateIncomeTax(gross: number): number {
        if (gross <= 300000) return 0;
        if (gross <= 600000) return (gross - 300000) * 0.05;
        if (gross <= 900000) return 15000 + (gross - 600000) * 0.10;
        if (gross <= 1200000) return 45000 + (gross - 900000) * 0.15;
        return 90000 + (gross - 1200000) * 0.20;
    }

    calculateSalary(ctc: number): SalaryBreakdown {
        const basic = ctc * 0.5;
        const epf = basic * 0.12;
        const gratuity = basic * 0.0481;
        const professionalTax = 2400;
        const standardDeduction = 75000;

        const totalDeductions = epf + gratuity + professionalTax + standardDeduction;
        const taxableIncome = ctc - standardDeduction;
        const incomeTax = this.calculateIncomeTax(taxableIncome);
        const inHandSalary = ctc - epf - gratuity - professionalTax - incomeTax;

        return {
            basic,
            epf,
            gratuity,
            professionalTax,
            standardDeduction,
            taxableIncome,
            incomeTax,
            inHandSalary,
        };
    }

    calculateGratuity(lastDrawnSalary: number, yearOfService: number): number {

        if (yearOfService < 5) {
            return 0; // Not eligible for gratuity
        }

        const gratuity = (15 * lastDrawnSalary * yearOfService) / 26;
        return Math.round(gratuity);

    }

    /**
     * test
     */
    public testPromise() {
        const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved after 2 seconds');
        }, 2000);
    });
    }
    public testObervable() {
        const observer = new Observable(observer => {
            setTimeout(() => {
                observer.next('Observable emitted after 2 seconds');
                observer.complete();
            }, 2000);
        });
    }
}
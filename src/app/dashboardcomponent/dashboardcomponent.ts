
import { Component, HostBinding, HostListener } from '@angular/core';
import { UserStats } from '../user-stats/user-stats';
import { CapitalizePipe } from '../capitalize-pipe';


@Component({
  selector: 'app-dashboardcomponent',
  imports: [UserStats,CapitalizePipe],
  templateUrl: './dashboardcomponent.html',
  styleUrl: './dashboardcomponent.css'
})
export class Dashboardcomponent {
userData = { name: 'John Doe', email: 'john.doe@example.com', age: 20 };
onUserUpdated(updatedUser: { name: string; email: string; age: number }) {
    console.log('User stats updated:', updatedUser);
    this.userData = updatedUser; // Update local userData with the new stats
  } 


  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    console.log('Dashboard clicked:', event);
  }

  @HostBinding('style.backgroundColor')
  get backgroundColor(): string {
    return this.userData.age > 10 ? 'lightblue' : 'lightgreen';
  }
}

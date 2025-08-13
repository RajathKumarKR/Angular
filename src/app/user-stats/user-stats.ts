import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-stats',
  imports: [CommonModule],
  templateUrl: './user-stats.html',
  styleUrl: './user-stats.css'
})
export class UserStats {
@Input() user!: { name: string; email: string; age: number };

@Output() userUpdated = new EventEmitter<{ name: string; email: string; age: number }>();

setUserStats() {
    if (this.user) {
      this.user.age += 10; // Increment age as an example of updating user stats
      this.userUpdated.emit(this.user);
      console.log('User stats updated:', this.user);
    } else {
      console.error('No user data available to update stats.');
    }
  }

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logincomponent',
  imports: [FormsModule],
  templateUrl: './logincomponent.html',
  styleUrl: './logincomponent.css'
})
export class Logincomponent {
  constructor(private router: Router) { }

  username: string = '';
  password: string = '';
  // Add any methods or properties needed for the login component
  onSubmit() {
    // Logic for handling login
    console.log('Login button clicked');
    if(this.username =='admin' && this.password == 'admin') {
      console.log('Login successful');
      //this.router.navigate(['/tasks/list']); // Navigate to task list on successful login
     this.router.navigate(['/salary']); // Navigate to salary form on successful login
    } else
    {
      console.log('Login failed');
      alert('Invalid username or password'); // Alert for invalid login
  }
}
}

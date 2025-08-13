import { Component } from '@angular/core';
import { Task } from '../../../core/services/task';
import { TaskModel } from '../../../core/services/model/task.model';
import { CommonModule, DatePipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardActions } from '@angular/material/card';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule }  from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Observable, of } from 'rxjs';
import { subscribe } from 'diagnostics_channel';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe,CommonModule,MatCheckboxModule,MatProgressSpinnerModule,
    MatCardActions,MatToolbarModule,MatButtonModule,MatIconModule,MatCardModule,HttpClientModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  tasks$: Observable<TaskModel[]> | undefined;
  
  constructor(private taskService: Task, private router: Router) { 
    this.tasks$ = this.taskService.tasks$;
  }

    task: TaskModel = {
    id: 0,
    title: 'Default Task',
    description: 'Study Angular',
    dueDate: new Date(),
    completed: false
  };
  
  ngOnInit() {
    // if (this.tasks$) {
    //   this.tasks$.subscribe(tasks => {
    //     if (tasks.length === 0) {
    //       this.tasks$ = of([this.task]);
    //       this.taskService.addTask(this.task); // Adding a default task if none exist
    //     }
    //   });
    // }
  }

  addTask() {
    console.log('Adding new task');
    this.router.navigate(['/tasks/new']);
  }

  viewTask(id: number) {
    // Logic to view task details
    console.log(`Viewing task with ID: ${id}`);
  }

  editTask(id: number) {
    // Logic to edit task
    const editTask = this.taskService.getTasks().find(t => t.id === id);
    // if (editTask) {
    //   this.taskService.editTask(id, updatedTask);
    // } else {
    //   console.error('Task not found');
    //}
  }

  deleteTask(id: number) {
    console.log(`Deleting task with ID: ${id}`);
      this.taskService.deleteTask(id);
  }

  home() {
    this.router.navigate(['/salary']);
  }
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }


  // getPromiseList() {
  //   return this.taskService.getPromiseList().then(tasks => {
  //     this.tasks$ = of(tasks);
  //   }).catch(error => {
  //     console.error('Error fetching tasks:', error);
  //     this.tasks$ = of([]);
  //   });
  // }

  // getObservableList() {
  //   this.taskService.getObservableList().subscribe({
  //     next: (tasks) => {
  //       this.tasks$ = of(tasks);
  //     },
  //     error: (error) => {
  //       console.error('Error fetching tasks:', error);
  //       this.tasks$ = of([]);
  //     },
  //     complete: () => {
  //       console.log('Task fetching completed');
  //     }
  //   });
  // }

}

import { Component, OnInit } from '@angular/core';
import { Task } from '../../../core/services/task';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskModel } from '../../../core/services/model/task.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { H } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule,CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm  implements OnInit {
  task: TaskModel = {
    id: 0,
    title: '',
    description: '',
    completed: false,
    dueDate: new Date()
  };
  form!: FormGroup;

  constructor(private taskService: Task, private fb:FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['',Validators.required],
      description: ['',Validators.required],
      dueDate: ['',Validators.required]
    });
  }

  addTask(value: any) {
    this.task.id = this.taskService.getTasks().length + 1; // Simple ID generation
    this.taskService.addTask(value);
    this.resetForm();
  }

  submit() {
    if (this.form.valid) { 
      this.addTask(this.form.value);
      this.router.navigate(['/tasks/list']); // Navigate to task list after adding a task
    }
  }

  resetForm() {
    this.task = {
      id: 0,
      title: '',
      description: '',
      completed: false,
      dueDate: new Date()
    };
  }

}

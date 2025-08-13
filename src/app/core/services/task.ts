import { inject, Injectable } from '@angular/core';
import { TaskModel } from './model/task.model';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Task {

  private tasks: TaskModel[] = [];

  private tasksSubject = new BehaviorSubject<TaskModel[]>([]);
  
  tasks$ = this.tasksSubject.asObservable();
  private http = inject(HttpClient); 

  constructor() { }

  addTask(task: TaskModel) {
    task.id = this.tasks.length + 1; // Simple ID generation
    task.completed = false; // Default value for new tasks
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  getTasks(): TaskModel[] { // Adding a default task for demonstration
    return this.tasks;
  }

  editTask(id: number, updatedTask: TaskModel) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
     this.tasksSubject.next(this.tasks);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next(this.tasks);
    console.log(`Task with ID ${id} deleted.`);
  }

  getTaskById(id: number): TaskModel | undefined {
    return this.tasks.find(task => task.id === id);
  } 

  completeTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
    }
  }

  getPromiseList(): Promise<any> {
    return firstValueFrom(this.http.get<any>('https://test-api.com/tasks'));
  }

  getObservableList() {
    return this.http.get<any>('https://test-api.com/tasks');
  }

}

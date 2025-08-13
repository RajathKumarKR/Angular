import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Task } from './task';
import { TaskModel } from './model/task.model';

describe('Task', () => {
  let service: Task;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Task]
    });
    service = TestBed.inject(Task);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a task', () => {
    const task: TaskModel = { id: 0, title: 'Test', description: 'desc', completed: false, dueDate: new Date() };
    service.addTask(task);
    expect(service.getTasks().length).toBe(1);
    expect(service.getTasks()[0].title).toBe('Test');
  });

  it('should edit a task', () => {
    const task: TaskModel = { id: 0, title: 'Test', description: 'desc', completed: false, dueDate: new Date() };
    service.addTask(task);
    const updated: TaskModel = { ...task, title: 'Updated' };
    service.editTask(1, updated);
    expect(service.getTasks()[0].title).toBe('Updated');
  });

  it('should delete a task', () => {
    const task: TaskModel = { id: 0, title: 'Test', description: 'desc', completed: false, dueDate: new Date() };
    service.addTask(task);
    service.deleteTask(1);
    expect(service.getTasks().length).toBe(0);
  });

  it('should get a task by id', () => {
    const task: TaskModel = { id: 0, title: 'Test', description: 'desc', completed: false, dueDate: new Date() };
    service.addTask(task);
    const found = service.getTaskById(1);
    expect(found).toBeDefined();
    expect(found?.title).toBe('Test');
  });

  it('should complete a task', () => {
    const task: TaskModel = { id: 0, title: 'Test', description: 'desc', completed: false, dueDate: new Date() };
    service.addTask(task);
    service.completeTask(1);
    expect(service.getTasks()[0].completed).toBeTrue();
  });

  it('should return observable list from API', (done) => {
    service.getObservableList().subscribe(data => {
      expect(data).toBeDefined();
      done();
    });
  });

  it('should return promise list from API', async () => {
    const data = await service.getPromiseList();
    expect(data).toBeDefined();
  });
});

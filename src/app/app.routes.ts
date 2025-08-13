import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Logincomponent } from './logincomponent/logincomponent';
import { Dashboardcomponent } from './dashboardcomponent/dashboardcomponent';
import { TaskForm } from './features/task/task-form/task-form';
import { TaskList } from './features/task/task-list/task-list';
import { SalaryFormComponent } from './features/salary/salary-form/salary-form';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Logincomponent
    },
    {
        path: 'dashboard',
        component: Dashboardcomponent
    },
    {
        path : 'tasks/new',
        component:TaskForm
    },
    {
        path: 'tasks/edit/1',
        component: TaskForm
    },
    {
        path: 'tasks/list',
        component: TaskList
    },
    {
        path: 'salary',
        component: SalaryFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

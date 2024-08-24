import { Routes } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
    {
        path:'',
        title:'Add Task',
        component:TaskFormComponent
    },
    {
        path:'taskList',
        title:'Task List',
        component:TaskListComponent
    },
    {
        path:'edittask/:id',
        title:'Edit Task',
        component:TaskFormComponent
    }
];

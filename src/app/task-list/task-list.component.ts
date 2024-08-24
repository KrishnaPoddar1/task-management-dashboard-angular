import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { TaskFormComponent } from '../task-form/task-form.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskFormComponent,CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
tasks:Task[] = [];

constructor(private taskService:TaskService, private route:Router){}

ngOnInit(){
  this.tasks = this.taskService.getTasks();
}

editTask(task:Task){
this.route.navigate(['/edittask',task.id]);  
}

deleteTask(id:number){
  this.taskService.deleteTask(id);
  this.tasks = this.taskService.getTasks();
}


}

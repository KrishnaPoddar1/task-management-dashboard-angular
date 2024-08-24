// import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
// import { TaskService } from '../task.service';
// import { FormsModule } from '@angular/forms';
// import { Task } from '../task';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-task-form',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './task-form.component.html',
//   styleUrl: './task-form.component.css'
// })
// export class TaskFormComponent implements OnInit {
//   @Output() taskUpdated = new EventEmitter<void>();

//   title:string = '';
//   description:string = '';
//   dueDate:string='';
//   status:'Pending'|'In-Progress'|'Completed' = 'Pending';
//   isEditMode: boolean = false;
//   taskId: number | null = null;

//   constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {}

//   ngOnInit() {
//     this.route.paramMap.subscribe(params => {
//       const id = params.get('id');
//       if (id) {
//         this.taskId = +id;
//         const task = this.taskService.getTaskById(this.taskId);
//         if (task) {
//           this.isEditMode = true;
//           this.title = task.title;
//           this.description = task.description;
//           this.dueDate = task.dueDate;
//           this.status = task.status;
//         }
//       }
//     });

//     onSubmit() {
//       if (this.isEditMode && this.taskId !== null) {
//         const updatedTask: Task = {
//           id: this.taskId,
//           title: this.title,
//           description: this.description,
//           dueDate: this.dueDate,
//           status: this.status
//         };
//         this.taskService.updateTask(updatedTask);
//       } else {
//         const newTask: Task = {
//           id: 0,
//           title: this.title,
//           description: this.description,
//           dueDate: this.dueDate,
//           status: this.status
//         };
//         this.taskService.addTask(newTask);
//       }
//       this.taskUpdated.emit();
//       this.router.navigate(['/taskList']);
//     }

//   reloadForm(){
//     this.title = '';
//     this.description='';
//     this.dueDate='';
//     this.status='Pending';
//   }
// }

import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent implements OnInit {

  title: string = '';
  description: string = '';
  dueDate: string = '';
  status: 'Pending' | 'In-Progress' | 'Completed' = 'Pending';
  isEditMode: boolean = false;
  taskId: number | null = null;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.taskId = +id;
        const task = this.taskService.getTaskById(this.taskId);
        if (task) {
          this.isEditMode = true;
          this.title = task.title;
          this.description = task.description;
          this.dueDate = task.dueDate;
          this.status = task.status;
        }
      }
    });
  }

  onSubmit() {
    if (this.isEditMode && this.taskId !== null) {
      const updatedTask: Task = {
        id: this.taskId,
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        status: this.status
      };
      this.taskService.updateTask(updatedTask);
    } else {
      const newTask: Task = {
        id: 0,
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        status: this.status
      };
      this.taskService.addTask(newTask);
    }
    this.router.navigate(['/taskList']);
  }
}

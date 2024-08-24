import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  private nextId = 1;

  constructor() { }
  
  getTasks():Task[]{
    return this.tasks;
  }

  getTaskById(id:number):Task|undefined{
    return this.tasks.find((task)=>task.id === id);
  }

  addTask(task:Task):void{
    task.id = this.nextId++;
    this.tasks.push(task);
  }

  updateTask(updatedTask:Task):void{
    const taskIndex = this.tasks.findIndex((task)=>task.id===updatedTask.id);
    if(taskIndex!==-1){
      this.tasks[taskIndex]=updatedTask;
    }
  }

  deleteTask(id:number):void{
    this.tasks = this.tasks.filter((task)=> task.id!==id);
  }

}

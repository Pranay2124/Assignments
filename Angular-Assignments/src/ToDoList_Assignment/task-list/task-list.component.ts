import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { AddtaskComponent } from '../addtask/addtask.component';
import { PipesExampleComponent } from '../pipes-example/pipes-example.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent,AddtaskComponent,PipesExampleComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: any[] = [
    {
      id: 1,
      desc: 'come to office',
      priority: 2,
      status: 'Completed'
    },
    {
      id: 2,
      desc: 'study angular',
      priority: 1,
      status: 'In Progress'
    },
    {
      id: 3,
      desc: 'go home',
      priority: 3,
      status: 'Pending'
    },
  ];
  RemoveByID(tid: number):void{
    this.tasks = this.tasks.filter((a) => a.id != tid);
  }
  AddTask(addtask: any):void{
    this.tasks.push(addtask);

  }
}

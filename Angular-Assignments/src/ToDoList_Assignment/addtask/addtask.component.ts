import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  @Output() add = new EventEmitter;
  arr:any={id:'',desc:'',status:''} 
  AddTask(arr:any):void{
    this.add.emit(arr);
    this.arr={};
  }
}

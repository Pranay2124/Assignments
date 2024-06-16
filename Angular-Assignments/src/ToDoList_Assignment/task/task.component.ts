import { NgClass } from '@angular/common';
import { Component ,EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task.component.html'
})
export class TaskComponent {
  @Input() taskItem: any;
  @Output() hatao = new EventEmitter()
  onRemove(tid: number): void {
    this.hatao.emit(tid);
  }
}

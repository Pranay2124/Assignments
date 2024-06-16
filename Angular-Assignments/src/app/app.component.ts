import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsePipePipe } from '../use-pipe.pipe';
import { TaskListComponent } from '../ToDoList_Assignment/task-list/task-list.component';
import { TableDataComponent } from '../Table_Assignment/table-data.component';
import { ListDataComponent } from '../List_Assignment/list-data.component';
import { ProfileBuilderComponent } from '../Profile-Builder_Assignment/profile-builder.component';
import { CartManagementComponent } from '../Cart-Management_Assignment/cart-management.component';
import { ShowCartComponent } from '../Cart-Management_Assignment/show-cart/show-cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TableDataComponent,ListDataComponent,UsePipePipe,ProfileBuilderComponent,CartManagementComponent,ShowCartComponent,TaskListComponent],
  template: '<app-task-list></app-task-list>',
})
export class AppComponent {
  title = 'angular-bootstrap';
  
}

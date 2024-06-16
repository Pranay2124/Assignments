import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableDataComponent } from '../table-data/table-data.component';
import { ListDataComponent } from '../list-data/list-data.component';
import { UsePipePipe } from '../use-pipe.pipe';
import { ProfileBuilderComponent } from '../profile-builder/profile-builder.component';
import { CartManagementComponent } from '../cart-management/cart-management.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TableDataComponent,ListDataComponent,UsePipePipe,ProfileBuilderComponent,CartManagementComponent],
  template: '<app-cart-management></app-cart-management>',
})
export class AppComponent {
  title = 'angular-bootstrap';
  
}

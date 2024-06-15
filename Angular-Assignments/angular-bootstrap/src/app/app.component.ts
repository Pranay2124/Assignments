import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableDataComponent } from '../table-data/table-data.component';
import { ListDataComponent } from '../list-data/list-data.component';
import { UsePipePipe } from '../use-pipe.pipe';
import { ProfileBuilderComponent } from '../profile-builder/profile-builder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TableDataComponent,ListDataComponent,UsePipePipe,ProfileBuilderComponent],
  template: '<app-profile-builder></app-profile-builder>',
})
export class AppComponent {
  title = 'angular-bootstrap';
  
}

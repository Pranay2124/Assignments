import { Routes } from '@angular/router';
import { ListDataComponent } from '../List_Assignment/list-data.component';
import { TableDataComponent } from '../Table_Assignment/table-data.component';
import { ProfileBuilderComponent } from '../Profile-Builder_Assignment/profile-builder.component';
import { TaskListComponent } from '../ToDoList_Assignment/task-list/task-list.component';
import { CartManagementComponent } from '../Cart-Management_Assignment/cart-management.component';
import { ShowCartComponent } from '../Cart-Management_Assignment/show-cart/show-cart.component';

export const routes: Routes = [
    {
        path:'',component:ListDataComponent
    },
    {
        path:'table',component:TableDataComponent
    },
    {
        path:'profile',component:ProfileBuilderComponent
    },
    {
        path:'todo',component:TaskListComponent
    },
    {
        path:'cart-mang',component:CartManagementComponent,
        children:[
            {
                path:'cart',component:ShowCartComponent
            }
        ]
    },
];

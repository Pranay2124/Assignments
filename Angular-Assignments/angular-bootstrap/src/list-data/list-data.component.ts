import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsePipePipe } from '../use-pipe.pipe';

@Component({
  selector: 'app-list-data',
  standalone: true,
  imports: [FormsModule,UsePipePipe],
  templateUrl: './list-data.component.html',
  styleUrl: './list-data.component.css'
})
export class ListDataComponent {
  names:any[]=[{fname:"Pranay",lname:"Kadam",company:"WYH",id:931},
    {fname:"Akshay",lname:"Mane",company:"Google",id:932},
    {fname:"Rajesh",lname:"Randive",company:"Windows",id:933}
  ];
  names2:any={fname:'',lname:'',company:'',id:''};
  filterText:any='';
  OnAdd(){
    this.names.push(this.names2);
    this.names2={};
  }
  OnSort(){
    this.names.sort((a,b)=>{
      var n1=a.fname.toLowerCase();
      var n2=b.fname.toLowerCase();
      console.log(n1);
      console.log(n2);
      debugger;
      if(n1<n2)
       return -1
      else if(n1>n2)
       return 1
      else
       return 0
  });
  }
  OnRemove(a:number){
    this.names.splice(a,1);
  }
}

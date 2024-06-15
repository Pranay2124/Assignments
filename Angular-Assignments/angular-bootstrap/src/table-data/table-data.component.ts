import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsePipePipe } from '../use-pipe.pipe';

@Component({
  selector: 'app-table-data',
  standalone: true,
  imports: [FormsModule,UsePipePipe],
  templateUrl: './table-data.component.html'
})
export class TableDataComponent {
  names:any[]=[{fname:"Pranay",lname:"Kadam",company:"WYH",email:"PranayKadam@gmail.com",phone:7385029889,desg:"Dot Net Developer"},
    {fname:"Akshay",lname:"Mane",company:"Google",email:"PranayKadam02@gmail.com",phone:7385029889,desg:"Angular Developer"},
    {fname:"Rajesh",lname:"Randive",company:"Microsoft",email:"PranayKadam003@gmail.com",phone:7385029889,desg:"Flutter Developer"}
  ];
  names2:any={fname:'',lname:'',company:'',email:'',phone:'',desg:''};
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

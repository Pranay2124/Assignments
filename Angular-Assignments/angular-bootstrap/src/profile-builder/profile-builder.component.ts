import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-builder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile-builder.component.html',
  styleUrl: './profile-builder.component.css'
})
export class ProfileBuilderComponent {
  names:any={fname:"Pranay",lname:"Kadam",email:"PranayKadam@gmail.com",tel:7385029889,add:"Balkum, Thane",job:"Dot Net Developer"};
  skills:any={};
  langs:any=["Python","C#","Angular"];
  Onchange(){
    this.skills.add(this.skills.test.value);
  }
}

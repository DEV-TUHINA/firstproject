import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  coloradd : string = 'bg-danger';
  iscolorblue : boolean = false;
  firstbox : string = '';
  secondbox : string = '';
  isdiv4checked : boolean = false;

  constructor(private router : Router){

  }
  studentList : any [] = [
    {studenId : 1, marks: 70, gender : 'male', name : 'Tuhina',isActive : false},
    {studenId : 2, marks: 80, gender : 'female', name : 'Tuhina2',isActive : false},
    {studenId : 3, marks: 90, gender : 'female', name : 'Tuhina3',isActive : true},
    {studenId : 4, marks: 75, gender : 'male', name : 'Tuhina4',isActive : false},
  ]

  navigatetoStructural(){
    this.router.navigateByUrl("structural-directive")
  }
customStyle : any = {
  'color' : 'white',
  'background-color' : 'red',
  'width' : '200px',
  'height' : '200px',
  'border-radius' : '50%'
}
  redcoloradd(){
    this.coloradd = "bg-danger";
  }
  bluecoloradd(){
    this.coloradd = "bg-primary";
  }

  isactivecheck(){
    this.iscolorblue = !this.iscolorblue;
  }
}

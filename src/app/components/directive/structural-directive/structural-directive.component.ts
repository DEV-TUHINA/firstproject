import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  isShowHide : boolean = false;
  divtoggle : boolean = true;
  firstbox : string = '';
  secondbox : string = '';

  isActive : boolean = false;
  isSelect : String = '';

  cityArray : string [] = ['Kolkata','Burdwan','Mumbai'];
  studentList : any [] = [
    {studenId : 1, name : 'Tuhina',isActive : false},
    {studenId : 2, name : 'Tuhina2',isActive : false},
    {studenId : 3, name : 'Tuhina3',isActive : true},
    {studenId : 4, name : 'Tuhina4',isActive : false},
  ]
  
  showdiv(){
    this.isShowHide = true;
  }
  hidediv(){
    this.isShowHide = false;
  }
  togglediv(){
    this.divtoggle = !this.divtoggle;
  }
}

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName: string = "Angular 18";
  inputType = "radio";
  rollNo: number = 123;
  isIndian: boolean = false;
  currentDate: Date = new Date();
  myClassname: string =  "bg-primary";
  stateName: string = "west Bengal";

 firstName = signal("Tuhina");
  constructor(){
   
  }

  showAlert(message: string){
    alert(message);
  }
  changeCourseName(){
    this.courseName  = "React";
    this.firstName.set("Ray");
  }
}

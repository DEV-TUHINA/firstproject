import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
  div1visible : boolean = true;
  iswarningdiv2visible : boolean = false;
  num1 : string = '';
  num2 : string = '';
  selectedStatus : string = '';
  
  div1show(){
    this.div1visible = true;
  }
  div1hide(){
    this.div1visible = false;
  }

  div2toggle(){
    this.iswarningdiv2visible = !this.iswarningdiv2visible;
  }

}

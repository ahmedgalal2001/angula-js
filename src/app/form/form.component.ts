import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private router: Router){}
  email = "";
  password = "";
  resetInput() {
    this.email = "";
    this.password = "";
  }
  returnSlide(){
    this.router.navigate(['/slide']);
  }
}

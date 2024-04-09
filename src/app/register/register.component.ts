import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [UsersService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Output() sendStudentData = new EventEmitter<any>();
  name = "";
  age = "";
  email = "";
  form: FormGroup;
  Students: { name: string, age: string; email: string }[] = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UsersService) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(10), Validators.max(30)]]
    });
  }

  resetInput() {
    this.form.reset();
  }
  returnSlide() {
    if (this.form.valid) {
      const newStudent = { name: this.form.value.name, age: this.form.value.age, email: this.form.value.email };
      this.userService.addStudent(newStudent).subscribe(res => {
        console.log(res);
      });
      this.form.reset();
    } else {
      console.log("Is not Valid");
    }
  }
}

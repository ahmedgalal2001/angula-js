import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstAngluar';
  receivedStudents: { name: string, age: string }[] = [];
  receiveStudentData(students: { name: string, age: string }[]) {
    this.receivedStudents = students;
  }
}

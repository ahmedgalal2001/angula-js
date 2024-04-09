import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  @Input() students: { name: string, age: string }[] = [];
}

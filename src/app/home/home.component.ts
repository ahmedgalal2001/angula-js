import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StudentdetailsComponent } from '../studentdetails/studentdetails.component';
import { UsersService } from '../users.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StudentdetailsComponent, HttpClientModule, RouterModule],
  providers: [UsersService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private userService: UsersService, private router: Router) { }
  Users: any;
  ngOnInit(): void {
    this.userService.getStudents().subscribe({
      next: (data) => {
        this.Users = data;
      },
      error: (err) => console.log(err),
    })
  }

  add() {
    this.router.navigate(['/student/add']);
  }

}

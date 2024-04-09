import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UsersService } from '../users.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-studentdetails',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  providers: [UsersService],
  templateUrl: './studentdetails.component.html',
  styleUrl: './studentdetails.component.css'
})
export class StudentdetailsComponent implements OnInit {
  ID: any;//undefined
  user: any;//undefined
  constructor(myRoute: ActivatedRoute, private userService: UsersService) {
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.userService.getStudent(this.ID).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => { console.log("Error:here") }
    })
  }
}

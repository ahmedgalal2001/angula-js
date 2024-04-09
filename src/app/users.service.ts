import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly http: HttpClient) { }
  private readonly URL = "http://localhost:3000/users";
  getStudents() {
    return this.http.get(this.URL);
  }
  getStudent(id: number) {
    return this.http.get(this.URL + "/" + id);
  }
  addStudent(user: any) {
    return this.http.post(this.URL, user);
  }
}

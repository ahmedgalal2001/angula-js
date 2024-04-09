import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'student/details/:id', component: StudentdetailsComponent },
  { path: 'student/add', component: RegisterComponent },
  { path: '**', component: ErrorComponent }
];

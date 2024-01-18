import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { FormsModule }   from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, CommonModule, RouterOutlet, MatFormFieldModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProgettoAngular';
}

import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],

  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  onSubmit(form: NgForm){
    const email = form.value.email
    const password = form.value.password
  }
}

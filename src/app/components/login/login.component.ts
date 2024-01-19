import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    email: '',
    password: ''
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
  }

  onLogin() {
    const isUserExist = this.signupUsers.find(user => user.email === this.loginObj.email && user.password === this.loginObj.password);
    if (isUserExist != undefined) {
      alert('User already exists');
    } else {
      alert('User not found');
    }
  }

  addClass() {
    const container = this.el.nativeElement.querySelector('#container');
    this.renderer.addClass(container, 'right-panel-active');
  }
  
  removeClass() {
    const container = this.el.nativeElement.querySelector('#container');
    this.renderer.removeClass(container, 'right-panel-active');
  }
}
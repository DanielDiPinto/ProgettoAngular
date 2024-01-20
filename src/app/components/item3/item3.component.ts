import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NgFor } from '@angular/common';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-item3',
  standalone: true,
  imports: [LoginComponent, NgFor, MatTableModule],
  templateUrl: './item3.component.html',
  styleUrl: './item3.component.css'
})
export class Item3Component implements OnInit {
  signupUsers: any[] = [];
  users: any[] = []; // Aggiungi questa linea

  ngOnInit() {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
      this.signupUsers.forEach(user => {
        this.users.push({
          userName: user.userName,
          email: user.email,
          password: user.password
        });
        console.log(user.userName);
        console.log(user.email);
        console.log(user.password);
      });
    } else {
      console.log('Nessun dato trovato con la chiave "signUpUsers"');
    }
  }
}
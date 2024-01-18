import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Item1Component } from './components/item1/item1.component';
import { Item2Component } from './components/item2/item2.component';
import { Item3Component } from './components/item3/item3.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent, children:[
        {path: '', redirectTo: 'item1', pathMatch: 'full'} ,
        {path: 'item1', component: Item1Component} ,
        {path: 'item2', component: Item2Component} ,
        {path: 'item3', component: Item3Component} 
    ] },
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
];

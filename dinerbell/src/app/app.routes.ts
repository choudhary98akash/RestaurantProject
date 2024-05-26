import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './home/form/form.component';

export const routes: Routes = [
    {path : '', component : LoginComponent},
    {path : 'home', component : HomeComponent},
    {path : 'form', component : FormComponent}
];

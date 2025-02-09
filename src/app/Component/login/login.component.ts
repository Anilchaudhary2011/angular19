import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { AppServicesService } from '../../Services/app-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginform!: FormGroup;
  errorMessage: string = '';
  constructor(private fb:FormBuilder,private appservice:AppServicesService,private router:Router){
   
  }
  ngOnInit(){
    this.loginform = this.fb.group({
      userName: [null, [Validators.required]],
      password:[null, [Validators.required]]
    })
  }
  submit(){
      if (this.loginform.invalid) {
        // If the form is invalid, return without doing anything
        return;
      }
  
      const { userName, password } = this.loginform.value;
  
      // Call the login method from AppService to authenticate the user
      const isLoggedIn = this.appservice.login(userName, password);
  
      if (isLoggedIn) {
        // If login is successful, navigate to the profile page
        this.router.navigate(['/profile']);
      } else {
        alert('Invalid username or password!')
        // this.errorMessage = 'Invalid username or password!';
      }
    }
  
    // Convenience method to get the form controls
    get f() {
      return this.loginform.controls;
    }
}

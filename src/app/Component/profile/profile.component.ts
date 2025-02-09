import { Component } from '@angular/core';
import { AppServicesService, IUser } from '../../Services/app-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user: IUser | null = null;

  constructor(private appService: AppServicesService, private router: Router) {}

  ngOnInit(): void {
    // Load the user details from the AppService
    this.user = this.appService.getUser();
    // If there's no user, redirect to login
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.appService.logout();
    this.router.navigate(['/login']);
  }
}

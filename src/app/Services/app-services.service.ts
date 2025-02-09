import { Injectable } from '@angular/core';

export interface IUser {
  fName: string;
  lName: string;
  userName: string;
  password: string;
  phoneNo: string;
  email: string;
  state: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {
  private loggedInUser: IUser | null = null;

  public userList: IUser[] = [
    {
      fName: 'anil',
      lName: 'chaudhary',
      userName: 'anil',
      password: '123',
      email: 'anilchaudhary123@gmail.com',
      phoneNo: '+91 8081464926',
      state: 'Utter Pradesh',
    },
    {
      fName: 'Alexa',
      lName: 'alexa',
      userName: 'Alexa',
      password: 'Alexa@123',
      email: 'alexa@hackerrank.com',
      phoneNo: '+1 1111111111',
      state: 'Delhi',
    },
  ];

  constructor() {
    // this.loadUserFromLocalStorage();
  }

  // private loadUserFromLocalStorage(): void {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     try {
  //       this.loggedInUser = JSON.parse(storedUser);
  //     } catch (e) {
  //       console.error('Failed to parse user data from localStorage', e);
  //       this.loggedInUser = null;
  //     }
  //   }
  // }

  login(userName: string, password: string): boolean {
    const user = this.userList.find(
      (user) => user.userName === userName && user.password === password
    );

    if (user) {
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(user)); // Store user in localStorage
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedInUser = null;
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    // if (!this.loggedInUser && localStorage.getItem('user')) {
    //   this.loadUserFromLocalStorage(); 
    // }
    return !!this.loggedInUser;
  }
  

  getUser(): IUser | null {
    return this.loggedInUser;
  }
}



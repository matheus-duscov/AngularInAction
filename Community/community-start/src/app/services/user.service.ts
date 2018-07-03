import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

let username = localStorage.getItem('username') || '';
let guest = (username) ? false : true;

@Injectable()
export class UserService {

  constructor(private router: Router) {}

  isGuest() {
    return guest;
  }

  getUser() {
    return username;
  }

  login(newUsername) {
    username = newUsername;
    guest = false;
    localStorage.setItem('username', username);
  }

  logout() {
    username = '';
    guest = true;
    localStorage.setItem('username', '');
    this.router.navigate([{outlets: {chat: null}}]);
  }
}

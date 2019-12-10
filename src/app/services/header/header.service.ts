import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  visible: boolean;
  username: string;

  constructor() {
    const storageUsername = localStorage.getItem('username');
    this.username = storageUsername ? storageUsername : null;
    this.visible = !!storageUsername;
  }
}

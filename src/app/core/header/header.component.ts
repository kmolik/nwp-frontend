import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services';
import { AuthService } from '../http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private storageService: StorageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/login']);
    this.storageService.deleteLocalStorageItem('token');
    this.authService.unAuthenticatedUser();
    console.log('Loged Out');
  }
}

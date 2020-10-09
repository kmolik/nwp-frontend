import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nwp-app';
  public flag: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
    ) {
  }

  ngOnInit() {
  }

}

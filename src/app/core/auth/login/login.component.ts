import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../http/';
import { Token } from '../../models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public flag: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private storageService: StorageService
    ) {
    this.flag = false;
   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe((res: Token) => {
      this.storageService.setLocalStorageItem('token', (res.accessToken));
      this.authService.authenticatedUser();
      this.router.navigate(['/economy/dashboard/tableDashboard']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/firebase/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  active = 2;
  public show: boolean = false;
  public loginForm: FormGroup | any;
  public errorMessage: any;

  constructor(public authService: AuthService, private fb: FormBuilder,
    private router: Router) {
    this.loginForm = this.fb.group({
      email: ['spruko@template.com', [Validators.required, Validators.email]],
      password: ['spruko', Validators.required]
    });

  }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
  }

  // Login With Google
  loginGoogle() {
    this.authService.GoogleAuth();
  }

  // Login With Twitter
  loginTwitter(): void {
    this.authService.signInTwitter();
  }

  // Login With Facebook
  loginFacebook() {
    this.authService.signInFacebok();
  }

  // Simple Login
  login() {
    this.authService.SignIn(this.loginForm.value['email'], this.loginForm.value['password']);
  }

  public error: any = '';
  public btnStatus: any = 'Login';
  public hidePassword: boolean = false;
  Submit() {
    this.btnStatus = 'Loading..';
    if (
      this.loginForm.controls['email'].value === 'spruko@template.com' &&
      this.loginForm.controls['password'].value === 'spruko'
      ) {
      this.btnStatus = 'Login';
      this.router.navigate(['/dashboard/dashboard01']);
    } else {
      this.error = 'Please check email and passowrd';
    }
  }
  public togglePassword() {
    this.hidePassword = !this.hidePassword;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserLoginDto } from 'src/app/models/dto/userLoginDto';
import { getToken } from 'src/app/utils/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  title = 'Iniciar sesión';
  
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _authService: AuthService) {
    this.loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    if (getToken()) {
      this.router.navigate(['/']);
    }
  }

  login(): void {
    const LOGIN: UserLoginDto = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
    this._authService.login(LOGIN).subscribe(data => {
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.loginForm.reset();
    })
  }
}

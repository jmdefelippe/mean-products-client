import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { getToken } from 'src/app/utils/auth';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  title = 'Crear cuenta';

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _authService: AuthService) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    if (getToken()) {
      this.router.navigate(['/']);
    }
  }

  createUser() {
    const USER: User = {
      email: this.userForm.get('email')?.value,
      name: this.userForm.get('name')?.value,
      password: this.userForm.get('password')?.value
    }
    this._authService.createUser(USER).subscribe(data => {
        this.toastr.success('El usuario fue registrado con éxito!', 'Usuario registrado!', { timeOut: 1500 });
        this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.userForm.reset();
    })
  }
}
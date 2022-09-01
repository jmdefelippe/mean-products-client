import { Component, OnInit } from '@angular/core';
import { removeToken, isLogged } from 'src/app/utils/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;

  constructor(private router: Router, private _authService: AuthService) {
    this.loggedIn = _authService.loggedIn;
  }

  ngOnInit(): void {
  }

  logout() {
    removeToken();
    this._authService.loggedIn = false;
    console.log(this._authService.loggedIn)
    this.router.navigate(['/login']);
  }

  onIsLogged() {
    return isLogged();
  }
}

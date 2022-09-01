import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user = "";

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this._authService.getAuthenticatedUser().subscribe(data => {
      this.user = data.user.name;
    })
  }
}

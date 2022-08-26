import { Component, OnInit } from '@angular/core';
import { removeToken, isLogged } from 'src/app/utils/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    removeToken();
    this.router.navigate(['/login']);
  }

  onIsLogged() {
    return isLogged();
  }

}

import { ProductWithAPIService } from './../../Services/ProductService-With-API.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit {
  status: boolean = false;

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getuserstatusFuncObs().subscribe(status => {
      this.status = status;
    });
  }

  logOut() {
    localStorage.removeItem("userToken");
    this.userService.isuserLogged.next(false);
  }
}

import { UserAuthService } from './../Services/user-auth.service';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../Services/user.service';



export const routeGuard: CanActivateFn = (route, state) => {
  const userAuthService = inject(UserService);
  const router = inject(Router);
  if(userAuthService.checkUserStatus){
    return true;
  }
  else{
    alert("you must login first")
    router.navigate(["/UserLogin"]);
    return false;
  }
};

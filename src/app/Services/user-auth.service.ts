import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
isuserLogged:BehaviorSubject<boolean>;


constructor() { 
this.isuserLogged=new BehaviorSubject<boolean>(this.checkUserStatus);
}

login(email:string,password:string){

    let token="222";
    localStorage.setItem("userToken",token);
    this.isuserLogged.next(true);

  }
  logout(){
    localStorage.removeItem("userToken");
    this.isuserLogged.next(false);

  }

  get checkUserStatus():boolean{
    return localStorage.getItem("userToken")?true:false;
  }

  getuserstatusFuncObs():Observable<boolean>{

   return this.isuserLogged.asObservable();
  }
}

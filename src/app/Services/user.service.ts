import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Observar } from '../Components/observar/observar';

export interface User {
    id?: number;
    fullName: string;
    email: string;
    mobileNumbers: string[];
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    isuserLogged: BehaviorSubject<boolean>;
    submitMessage: string = '';
    submitMessageType: string = '';

    private apiUrl = `${environment.BaseURL}/users`;

    constructor(private http: HttpClient) {
        this.isuserLogged = new BehaviorSubject<boolean>(this.checkUserStatus);
    }


    registerUser(user: User): Observable<User> {
        return new Observable<User>(observer => {
            this.isEmailTaken(user.email).subscribe(isTaken => {
                if (!isTaken) {
                    console.log("register");
                    let token = "222";
                    localStorage.setItem("userToken", token);
                    this.isuserLogged.next(true);
                    this.http.post<User>(this.apiUrl, user).subscribe(
                        createdUser => {
                            observer.next(createdUser);
                            observer.complete();
                        },
                        error => observer.error(error)
                    );
                } else {
                    console.log("email taken");
                    observer.error("email taken");
                }
            });
        });
    }

    login(email: string, password: string): Observable<User> {

        return new Observable<User>(observer => {
            this.getUserByEmail(email).subscribe(users => {
                if (users.length > 0) {
                    const user = users[0];
                    if (user.password === password) {
                        let token = "222";
                        localStorage.setItem("userToken", token);
                        this.isuserLogged.next(true);
                        observer.next(user);
                        observer.complete();
                    } else {
                        observer.error("Incorrect password");
                    }
                } else {
                    observer.error("User not found");
                }
            });
        });
    }



    logout() {
        localStorage.removeItem("userToken");
        this.isuserLogged.next(false);
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }

    getUserById(id: number): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/${id}`);
    }

    getUserByEmail(email: string): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiUrl}?email=${email}`);
    }

    get checkUserStatus(): boolean {
        return localStorage.getItem("userToken") ? true : false;
    }

    getuserstatusFuncObs(): Observable<boolean> {
        return this.isuserLogged.asObservable();
    }

    isEmailTaken(email: string): Observable<boolean> {
        return new Observable<boolean>(observer => {
            this.getUserByEmail(email).subscribe(users => {
                if (users.length > 0) {
                    observer.next(true);
                } else {
                    observer.next(false);
                }
                observer.complete();
            });
        });
    }
}

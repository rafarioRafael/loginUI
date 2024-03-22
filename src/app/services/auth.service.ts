import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://localhost:7167/api/User/";
  private isAuthenticated = true;

  constructor(private http: HttpClient) { }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}register`, userObj);
  }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj);
  }

  // metodo de verificação de autenticação
  // fezLogin() {
  //   // Lógica de autenticação, por exemplo, verificar credenciais, etc.
  //   this.isAuthenticated = true;
  // }

  // fezLogout() {
  //   this.isAuthenticated = false;
  // }

  // isAuthenticatedUser(): boolean {
  //   return this.isAuthenticated;
  // }
}

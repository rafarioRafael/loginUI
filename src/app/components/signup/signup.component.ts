import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye-slash"

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa fa-eye" : this.eyeIcon = "fa fa-eye-slash"; //se é verdadeiro ? ---- se for falso :
    this.isText ? this.type = "text" : this.type = "password";
  }

}

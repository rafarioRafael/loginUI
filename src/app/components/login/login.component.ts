import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye-slash"
  loginForm!: FormGroup;
  loading!: boolean;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  //form group: é uma classe que agrupa os filhos do form control em um objeto
 
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa fa-eye" : this.eyeIcon = "fa fa-eye-slash"; //se é verdadeiro ? ---- se for falso :
    this.isText ? this.type = "text" : this.type = "password";
  }

  onLogin() {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.loading = true;
      this.auth.login(this.loginForm.value).subscribe({
        next:(res=>{
          alert(res.message)
          this.auth.fezLogin();
          this.router.navigate(['dashboard'])
        }),
        error:(err=>{
          alert(err?.error.message)
          this.loading = false;
        })
      })
    } else {
      console.log('form has errors.');
      ValidateForm.validateAllFormFields(this.loginForm);
      alert('okdokaodkao');
    }
  }
}

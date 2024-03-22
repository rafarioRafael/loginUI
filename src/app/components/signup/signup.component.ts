import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye-slash"
  signupForm!: FormGroup;
  loading!: boolean;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa fa-eye" : this.eyeIcon = "fa fa-eye-slash"; //se é verdadeiro ? ---- se for falso :
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignup() {
    if(this.signupForm.valid){
      //this.loading = true;
      this.auth.signUp(this.signupForm.value).subscribe({
        next:(res=>{
          this.toaster.success(res.message);
          this.router.navigate(['login'])
        }),
        error:(err=>{
          this.toaster.error(err?.error.message);
        }),
        complete:()=>{
          //this.loading = false;
        }
      })
    } else {
      console.log('form has errors.');
      ValidateForm.validateAllFormFields(this.signupForm);
      alert('okdokaodkao');
    }
  }
}

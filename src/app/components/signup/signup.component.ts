import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  signupForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

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
      console.log(this.signupForm.value)
      this.auth.signUp(this.signupForm.value).subscribe({
        next:(res)=>{
          alert(res.message);
          this.signupForm.reset();
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    } else {
      console.log('form has errors.');
      ValidateForm.validateAllFormFields(this.signupForm);
      alert('okdokaodkao');
    }
  }
}

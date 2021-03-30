import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = this.fb.group({
    'email':['',[Validators.required, Validators.email]],
    'password':['',[Validators.required, Validators.minLength(6)]]
  })

  loading:boolean = false;

  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private snackBar:MatSnackBar
    ,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const credentials = this.loginForm.value
    this.loading = true
    this.authService.login(credentials)
      .subscribe(
        (user)=>{
          this.snackBar.open(
            "Logged in succefully,Welcome "
            + user.firstname + "!",
            "OK",{duration:2000})
            this.router.navigateByUrl('/')
            this.loading = false
        },
        (err)=>{
          console.error(err)
          this.snackBar.open(
            "Login error",
            "OK",{duration:2000})
            this.loading = false
        }
        )

  }
}

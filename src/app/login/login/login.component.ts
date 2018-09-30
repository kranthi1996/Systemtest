import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Urlconfig } from '../../config/index.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  sign_up: boolean = true;
  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit() {
  }
  login() {
    if (this.loginForm.valid) {
      this.router.navigateByUrl(Urlconfig.PRODUCTS);
      this.sign_up = false;
    }
  }
}

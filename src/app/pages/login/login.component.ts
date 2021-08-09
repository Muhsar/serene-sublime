import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
  import { Router } from "@angular/router"
import { login } from '../../../api/apiCall';
import { LOGIN } from '../../../api/apiUrl';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    localStorage?.token && this.router.navigate(['/'])
  }
    profileForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
    async onSubmit(event: any) {
      event.preventDefault()
    console.warn(this.profileForm.value);const {
      email,
      password,
    } = this.profileForm.value
    await login({
      url: LOGIN,
      data: {
      email,
      password
    }
    }).then(res=>{
      this.router.navigate(['/'])
    })
  }
}

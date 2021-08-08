import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
    profileForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
    onSubmit() {
    console.warn(this.profileForm.value);
  }
selectedFile: File;
  title = 'myapp';
  name = new FormControl('');
  url = ""
  display = () => {
    alert(this.name.value);
  };
  public addFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0]
            var reader = new FileReader();
            reader.onload = (event: any) => {
                this.url = event.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }
  }
}

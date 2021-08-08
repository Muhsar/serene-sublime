import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
profileForm = this.fb.group({
    email: ['', Validators.required],
    full_name: ['', Validators.required],
    image: [''],
    password: ['', Validators.required]
  });
    onSubmit(event: any) {
      event.preventDefault()
    console.warn(this.profileForm.value);
  }
selectedFile: File;
  title = 'myapp';
  // image = new FormControl('');
  url = ""
  display = () => {
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

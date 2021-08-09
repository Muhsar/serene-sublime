import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { REGISTER } from '../../../api/apiUrl';
import { Router } from "@angular/router"
import { registration } from '../../../api/apiCall';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    localStorage?.token && this.router.navigate(['/'])
  }
profileForm = this.fb.group({
    email: ['', Validators.required],
    full_name: ['', Validators.required],
    image: [''],
    password: ['', Validators.required]
  });
    async onSubmit(event: any) {
      event.preventDefault()
    console.warn(this.profileForm.value);
    const data = new FormData()
    data.append('file', this.selectedFile)
    data.append('upload_preset', 'jewbreel')
    await axios.post('https://api.cloudinary.com/v1_1/jewbreel1/image/upload',
    data
    ).then(res=>{
      this.profileForm.value.image = res.data.secure_url
    })
    console.log(this.profileForm.value.image)
    const {
      full_name,
      email,
      password,
      image
    } = this.profileForm.value
    await registration({
      url: REGISTER,
      data: {
      full_name,
      email,
      password,
      image
    }
    }).then(res=>{
      this.router.navigate(['/'])
    })
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

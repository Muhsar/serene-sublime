import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedFile: File;
  title = 'myapp';
  name = new FormControl('');
  url = ""
  // imgSrc = this.selectedFile
  display = () => {
    // axios.post("https://")
    alert(this.name.value);
  };
  // constructor(public selectedFile: File)
  public addFile(event: any) {
    if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event: any) => {
                this.url = event.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }
  }

}

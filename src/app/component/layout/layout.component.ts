import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }
name: string
image: string
  ngOnInit(): void {
    !localStorage?.token && this.router.navigate(['/login'])
    const token: {image: string, full_name: string} = jwt_decode(localStorage?.token)
    this.image = token?.image
    this.name = token?.full_name
  }

}

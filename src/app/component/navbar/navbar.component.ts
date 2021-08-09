import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Router } from "@angular/router"
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
image: string
loggedIn: boolean
routes: {name: string, href: string}[]
button: any
  ngOnInit(): void {
    this.loggedIn = localStorage?.token ? true : false
    const loggedRoutes = [
      {name: "Products", href: "/products/all"},
      {name: "Wishlist", href: "/wishlist"},
      {name: "Cart", href: "/cart"},
    ]
    const unAuthRoutes = [
      {name: "Login", href: "/login"},
      {name: "SignUp", href: "/register"},
    ]
    this.routes = localStorage?.token ? loggedRoutes : unAuthRoutes
    const token: {image: string} = localStorage.getItem("token") ? jwt_decode(localStorage.getItem("token")) : {image: "./assets/img/i4.png"}
    this.image = token?.image
  }
}

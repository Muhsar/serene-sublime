import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
style: string
  ngOnInit(): void {
    this.showMenu = false
  }
showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
    this.setStyles()
    console.log(this.showMenu)
  }
  setStyles() {
    this.style = this.showMenu ? "flex flex-col lg:flex-row list-none mr-auto" : "hidden"
  }
}

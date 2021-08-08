import { Component, OnInit } from '@angular/core';
import axios from "axios"

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() {
  console.log(this.products)
  }

  ngOnInit(): void {
  axios.get("https://fakestoreapi.com//products/category/jewelery?limit=1").then(res=> {
    // console.log(res.data[0])
    const response = res.data[0]
    this.products = [...this.products, response]
    }
  )
  axios.get("https://fakestoreapi.com//products/category/electronics?limit=3").then(res=> {
    // console.log(res.data[0])
    const response = res.data[2]
    this.products = [...this.products, response]
    }
  )
  axios.get("https://fakestoreapi.com//products/category/men's clothing?limit=1").then(res=> {
    // console.log(res.data[0])
    const response = res.data[0]
    this.products = [...this.products, response]
    }
  )
  axios.get("https://fakestoreapi.com//products/category/women's clothing?limit=1").then(res=> {
    // console.log(res.data[0])
    const response = res.data[0]
    this.products = [...this.products, response]
    }
  )
  }
  products = []
}

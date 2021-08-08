import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import axios from "axios"
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

category: string
totalProducts: number = 0
currentProducts: number = 0
  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('id')
    console.log(this.category)
    const url = this.category == "all" ? `https://fakestoreapi.com//products` : `https://fakestoreapi.com//products/category/${this.category}`
    console.log(url)
    axios.get(url).then(res=> {
    const response = res.data
    this.products = response
    }
  )
  this.totalProducts = this.products.length
}
callProducts(product) {
  this.category = product
  const url = this.category == "all" ? `https://fakestoreapi.com//products` : `https://fakestoreapi.com//products/category/${this.category}`
    console.log(url)
    axios.get(url).then(res=> {
    const response = res.data
    this.products = response
    }
  )
  this.totalProducts = this.products.length
}
categories = [
"electronics",
"jewelery",
"men's clothing",
"women's clothing"
]
products = []
  }
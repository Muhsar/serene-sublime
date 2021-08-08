import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import axios from 'axios';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

productId: string
  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')
    console.log(this.productId)
    const url = `https://fakestoreapi.com/products/${this.productId}`
    console.log(url)
    axios.get(url).then(res=> {
    const response = res.data
    this.product = response
    })
}
product: {
  image: string,
  title: string,
  description: string,
  price: any,
  category: string,
  id: any
}
  }
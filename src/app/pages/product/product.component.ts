import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import axios from 'axios';
import { postRequest } from '../../../api/apiCall';
import { Add_TO_Cart, Add_TO_Wish } from '../../../api/apiUrl';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

productId: string
  constructor(private route: ActivatedRoute, private router: Router) { 
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
async AddToCart(e: any) {
  e.preventDefault()
  const {
    image,
  title,
  description,
  price,
  category,
  id: product_id
  } = this.product
  postRequest({
    url: Add_TO_Cart,
    data: {
    image,
  title,
  description,
  price,
  category,
  product_id,
  amount: 1
  }
  }).then(res=>{
    this.router.navigate(['/cart'])
  })
}
async AddToWishList(e: any) {
  e.preventDefault()
  const {
    image,
  title,
  description,
  price,
  category,
  id: product_id
  } = this.product
  postRequest({
    url: Add_TO_Wish,
    data: {
    image,
  title,
  description,
  price,
  category,
  product_id
  }
  }).then(res=>{
    this.router.navigate(['/wishlist'])
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
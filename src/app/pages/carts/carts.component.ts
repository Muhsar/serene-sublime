import { Component, OnInit } from '@angular/core';
import { getRequest, deleteRequest } from '../../../api/apiCall';
import { Get_All_Cart, Get_Cart } from '../../../api/apiUrl';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  constructor() { }
carts: any[]
  ngOnInit(): void {
    getRequest({
      url: Get_All_Cart
    }).then(res=>{
      this.carts = res.data
    })
  }
async deleteItem(e:any, id: any) {
  e.preventDefault()
  await deleteRequest({
    url: Get_Cart(id)
  }).then(res=>{
    this.carts = res.data
  })
}
}

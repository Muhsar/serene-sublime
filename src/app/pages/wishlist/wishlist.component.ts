import { Component, OnInit } from '@angular/core';
import { getRequest, deleteRequest } from '../../../api/apiCall';
import { Get_All_Wish, Get_Wish } from '../../../api/apiUrl';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor() { }
wish: any[]
  ngOnInit(): void {
    getRequest({
      url: Get_All_Wish
    }).then(res=>{
      this.wish = res.data
    })
  }
async deleteWish(e:any, id: any) {
  e.preventDefault()
  await deleteRequest({
    url: Get_Wish(id)
  }).then(res=>{
    this.wish = res.data
  })
}
}

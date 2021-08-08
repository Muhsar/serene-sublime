import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishComponent } from './pages/wish/wish.component';
import { CartsComponent } from './pages/carts/carts.component';
import { ProductComponent } from './pages/product/product.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CartComponent } from './pages/cart/cart.component';
import { LayoutComponent } from './component/layout/layout.component';

const routes: Routes = [
  {
    path: 'wish/:id',
    component: LayoutComponent,
    children: [{ path: '', component: WishComponent }],
  },
  { path: 'cart',
    component: LayoutComponent,
    children: [{ path: '', component: CartsComponent }],
   },
  { path: 'product/:id',
    component: LayoutComponent,
    children: [{ path: '', component: ProductComponent }],
   },
  { path: 'wishlist',
    component: LayoutComponent,
    children: [{ path: '', component: WishlistComponent }],
   },
  { path: 'cart/:id',
    component: LayoutComponent,
    children: [{ path: '', component: CartComponent }],
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

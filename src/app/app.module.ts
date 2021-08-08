import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeroComponent } from './component/hero/hero.component';
import { FeaturesComponent } from './component/features/features.component';
import { ProductsComponent } from './pages/products/products.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { FooterComponent } from './component/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProductComponent } from './pages/product/product.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { WishComponent } from './pages/wish/wish.component';
import { CartsComponent } from './pages/carts/carts.component';
import { CartComponent } from './pages/cart/cart.component';
import { HttpClientModule } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component'

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    ProductsComponent,
    BlogsComponent,
    FooterComponent,
    LandingComponent,
    ProductComponent,
    WishlistComponent,
    WishComponent,
    CartsComponent,
    CartComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutRoutingModule
    // ActivatedRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

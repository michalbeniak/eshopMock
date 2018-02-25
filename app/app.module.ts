import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { CommunicatorService } from './../services/communicator.service';
import { ThreeProductsComponent } from './three-products/three-products.component';
import { ProductsList } from '../models/products-list';
import { Product } from '../models/product';
import { BackgroundComponent } from './background/background.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { MenuComponent } from './menu/menu.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';
import { FooterComponent } from './footer/footer.component';
import { CartDetailComponentComponent } from './cart-detail-component/cart-detail-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { FaqComponentComponent } from './faq-component/faq-component.component';
import { FaqQuestionComponent } from './faq-question/faq-question.component';
import { ShopComponentComponent } from './shop-component/shop-component.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { BlogComponent } from './blog/blog.component';
import { CartServiceService } from './cart-service.service';
import { CartService } from './cart.service';
import { ProductCartComponent } from './product-cart/product-cart.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'shop', component: ShopComponentComponent },
  { path: 'blog', component: BlogComponentComponent }, 
  { path: 'faq', component: FaqComponentComponent },
  { path: 'contact', component: ContactComponentComponent },
  { path: 'cart', component: CartDetailComponentComponent },
  { path: 'product/:id', component: ProductDetailComponentComponent},
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ThreeProductsComponent,
    BackgroundComponent,
    ParagraphComponent,
    MenuComponent,
    MyCartComponent,
    HomeComponentComponent,
    ProductDetailComponentComponent,
    FooterComponent,
    CartDetailComponentComponent,
    ContactComponentComponent,
    FaqComponentComponent,
    FaqQuestionComponent,
    ShopComponentComponent,
    ProductShopComponent,
    BlogComponentComponent,
    BlogComponent,
    ProductCartComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HttpClientModule
  ],
  providers: [CommunicatorService, ProductsList, CartServiceService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

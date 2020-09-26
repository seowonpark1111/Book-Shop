import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { CheckoutComponent } from './pages/checkout/checkout.component'
const routes: Routes = [
  {path: 'who-we-are', component: IntroductionComponent},
  {path: 'shopping-time', component: ShopComponent},
  {path: 'find-authors', component: AuthorsComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


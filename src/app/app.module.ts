import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { HeaderComponent } from './Features/header/header.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { ProduitComponent } from './Pages/produit/produit.component';
import { FooterComponent } from './Features/footer/footer.component';
// import { DetailsProduitsComponent } from './Pages/details-produits/details-produits.component';
import { ProductsService } from './Core/Services/products.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
<<<<<<< HEAD
import { AuthComponent } from './Pages/auth/auth.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
=======
import { DashboardComponent } from './Features/dashboard/dashboard.component';
import { SignupComponent } from './Features/auth/signup/signup.component';
import { SingInComponent } from './Features/auth/sing-in/sing-in.component';

>>>>>>> b1d5c4e04cd462d9235464835af5240dd713b7be
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DetailComponent,
    ProduitComponent,
    FooterComponent,
<<<<<<< HEAD
    AuthComponent,
    DashboardComponent,
=======
    DashboardComponent,
    SignupComponent,
    SingInComponent,
>>>>>>> b1d5c4e04cd462d9235464835af5240dd713b7be
    // DetailsProduitsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

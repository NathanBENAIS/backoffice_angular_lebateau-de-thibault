import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { ProduitComponent } from './Pages/produit/produit.component';
import { DetailsProduitsComponent } from './Pages/details-produits/details-produits.component';
<<<<<<< HEAD
import { DashboardComponent } from './Pages/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail',component:DetailComponent },
  { path: 'produit',component:ProduitComponent },
  { path: 'details-produits',component:DetailsProduitsComponent },
  { path: 'dashboard', component:DashboardComponent},
  

=======
import { DashboardComponent } from './Features/dashboard/dashboard.component';



const routes: Routes = [
  { path: '', component: HomeComponent,data: { title: 'Accueil' } },
  { path: 'dashboard', component: DashboardComponent,data: { title: 'Dashboard' } },
  { path: 'detail',component:DetailComponent , data: { title: 'Détails' }},
  { path: 'produit',component:ProduitComponent , data: { title: 'Produit' }},
  { path: 'details-produits',component:DetailsProduitsComponent, data: { title: 'Details Produits' } },
>>>>>>> b1d5c4e04cd462d9235464835af5240dd713b7be
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

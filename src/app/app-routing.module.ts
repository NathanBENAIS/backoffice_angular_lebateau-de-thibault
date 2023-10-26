import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { ProduitComponent } from './Pages/produit/produit.component';
import { DetailsProduitsComponent } from './Pages/details-produits/details-produits.component';
import { DashboardComponent } from './Features/dashboard/dashboard.component';




const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'detail',component:DetailComponent },
  { path: 'produit',component:ProduitComponent },
  { path: 'details-produits',component:DetailsProduitsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

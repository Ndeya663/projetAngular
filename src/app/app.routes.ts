import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitFormComponent } from './produit-form/produit-form.component';

const routes: Routes = [
  { path: '', component: ProduitListComponent },
  { path: 'ajouter', component: ProduitFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

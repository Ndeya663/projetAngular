import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Produit {
  id: number;
  nom: string;
  description: string;
  quantite: number;
  prix: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private produits: Produit[] = [];
  private produitsSubject = new BehaviorSubject<Produit[]>(this.produits);
  produits$ = this.produitsSubject.asObservable();

  constructor() {
    // Ajout de produits de test
    this.produits = [
      { id: 1, nom: 'Produit 1', description: 'Description 1', quantite: 10, prix: 100 },
      { id: 2, nom: 'Produit 2', description: 'Description 2', quantite: 5, prix: 200 },
    ];
    this.produitsSubject.next(this.produits);
  }

  // Ajouter un produit
  ajouterProduit(produit: Produit) {
    produit.id = this.produits.length + 1;
    this.produits.push(produit);
    this.produitsSubject.next(this.produits);
  }

  // Modifier un produit
  modifierProduit(produit: Produit) {
    const index = this.produits.findIndex((p) => p.id === produit.id);
    if (index !== -1) {
      this.produits[index] = produit;
      this.produitsSubject.next(this.produits);
    }
  }

  // Supprimer un produit
  supprimerProduit(id: number) {
    this.produits = this.produits.filter((p) => p.id !== id);
    this.produitsSubject.next(this.produits);
  }
}

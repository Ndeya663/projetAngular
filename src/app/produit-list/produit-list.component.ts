import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  // Tableau de produits à afficher
  produits = [
    { nom: 'Produit 1', description: 'Description 1', quantite: 10, prix: 100 },
    { nom: 'Produit 2', description: 'Description 2', quantite: 5, prix: 50 },
    { nom: 'Produit 3', description: 'Description 3', quantite: 7, prix: 75 },
  ];

  // Colonnes à afficher dans la table
  displayedColumns: string[] = ['nom', 'description', 'quantite', 'prix'];

  constructor() { }

  ngOnInit(): void { }
}

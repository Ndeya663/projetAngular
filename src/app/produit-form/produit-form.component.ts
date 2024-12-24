import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produit, ProduitService } from '../produit.service';  // Assure-toi que le service est bien importé

@Component({
  selector: 'app-produit-form',
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.css'],
})
export class ProduitFormComponent implements OnInit {
  produitForm: FormGroup;

  constructor(private fb: FormBuilder, private produitService: ProduitService) {
    this.produitForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      quantite: [0, [Validators.required, Validators.min(1)]],
      prix: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {}

  ajouterProduit() {
    if (this.produitForm.valid) {
      const produit: Produit = this.produitForm.value;
      this.produitService.ajouterProduit(produit);  // Ajouter le produit au service
      this.produitForm.reset();  // Réinitialiser le formulaire après l'ajout
    }
  }
}


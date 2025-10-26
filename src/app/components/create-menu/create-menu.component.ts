// create-menu.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListMenuService } from 'src/app/services/list-menu.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss']
})
export class CreateMenuComponent implements OnInit {
  menuForm: FormGroup;
  restaurantId:number;

  constructor(private formBuilder: FormBuilder, private menuService: ListMenuService, private router: Router) { }

  ngOnInit(): void {
    this.menuForm = this.formBuilder.group({
      nom: ['', Validators.required],
      speciality: ['', Validators.required],
    });
  }

  createNewMenu() {
    console.log('Restaurant ID:', this.restaurantId);

    const menuData = {
      // Remplacez ces propriétés avec les propriétés du nouveau menu que vous souhaitez créer
      nom: 'Nom du menu',
      specialite: 'Spécialité du menu',
      // Autres propriétés du menu...
    };

    this.menuService.createMenu(this.restaurantId, menuData).subscribe(
      (response) => {
        console.log('Menu créé avec succès:', response);
        // Gérer la réponse du serveur ou effectuer toute autre action nécessaire après la création du menu réussie
      },
      (error) => {
        console.log('Erreur lors de la création du menu:', error);
        // Gérer l'erreur selon vos besoins
      }
    );
  }
}






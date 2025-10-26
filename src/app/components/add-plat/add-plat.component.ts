import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListMenuService } from 'src/app/services/list-menu.service';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.scss']
})
export class AddPlatComponent implements OnInit {
  platForm: FormGroup;
  menus: any[]; 
  constructor(private formBuilder: FormBuilder, private platService: PlatService,private listMenuService:ListMenuService, private router: Router) { }

  ngOnInit() {
    // Initialisez le formulaire réactif avec les contrôles nécessaires
    this.platForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prix: ['', Validators.required],
      menuId: ['', Validators.required]
    });

    // Obtenez les menus depuis le service
    this.listMenuService.AllMenus().subscribe(
      (menus) => {
        this.menus = menus;
      },
      (error) => {
        console.error('Erreur lors de la récupération des menus:', error);
      }
    );
  }

  onSubmit() {
    // Vérifiez si le formulaire est valide
    if (this.platForm.valid) {
      // Créez l'objet représentant les détails du plat à ajouter au menu
      const ajouPlatRequest = this.platForm.value;

      // Appelez le service pour ajouter le plat au menu
      this.platService.addPlat(ajouPlatRequest).subscribe(
        (response) => {
          // Réponse du serveur en cas de succès
          console.log('Plat ajouté avec succès au menu:', response);
          // Ici, vous pouvez effectuer d'autres actions après l'ajout du plat
          this.router.navigate(['/menu']); // Remplacez '/menus' par le chemin de la route correspondant à la page d'affichage des menus

        },
        (error) => {
          // Gestion des erreurs en cas d'échec de l'ajout
          console.error('Erreur lors de l\'ajout du plat au menu:', error);
        }

      );
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';
import { ListMenuService } from 'src/app/services/list-menu.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommentaireService } from 'src/app/services/commentaire.service';



@Component({
  selector: 'app-menu-front',
  templateUrl: './menu-front.component.html',
  styleUrls: ['./menu-front.component.scss']
})
export class MenuFrontComponent implements OnInit {
  menus: any;
  plats: any;
  selectedMenuId: number;
  commentaire: string =''; 
  commentaires:any[];
  plat:any;

 constructor(private commentairesService:CommentaireService ,private menuService: ListMenuService , private platService: PlatService) { }

  ngOnInit() {
    
    // Fetch the menus from the backend on component initialization
    this.menuService.AllMenus().subscribe(
      (menus) => {
        this.menus = menus;
        // this.calculateAverageRatings(); // Calculate average ratings after fetching the data

      },
      (error) => {
        console.log('Error fetching menus:', error);
      }
    );
  }

  viewPlats(menuId: number) {
    // Vérifie si le menu cliqué est déjà sélectionné, si oui, déselectionne-le
    if (this.selectedMenuId === menuId) {
      this.selectedMenuId = null;
      this.plats = []; // Réinitialise la liste des plats
    } else {
      this.selectedMenuId = menuId;
      this.platService.getplat(menuId).subscribe(
        (data) => {
          this.plats = data;
          this.plats.forEach((plat) => {
            plat.commentaires = []; // Initialize an empty array for comments
            plat.showComments = false; // Initialize showComments to false
          });
        },
        (error) => {
          console.log('Error fetching plats for menu:', error);
        }
      );
    }
  }
  saveCommentaire(plat: any) {
    if (plat.commentaire && plat.commentaire.trim() !== '') { // Check if the comment is not empty or null
      this.platService.addCommentaire(plat.id, plat.commentaire).subscribe(
        (response) => {
          console.log('Commentaire sauvegardé:', plat.commentaire);
          plat.commentaires.push(response);

          // Vous pouvez afficher un message de succès ou effectuer toute autre action nécessaire après la sauvegarde réussie du commentaire
          plat.commentaire = '';
        },
        (error) => {
          console.log('Error saving commentaire:', error);
          // Vous pouvez afficher un message d'erreur ou gérer l'erreur selon vos besoins
        }
      );
    }
  }
  getCommentaires(platId: number) {
    this.commentairesService.getCommentairesByPlate(platId).subscribe(
      (data) => {
        this.commentaires = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des commentaires:', error);
      }
    );
  }
  toggleComments(plat: any): void {
    plat.showComments = !plat.showComments;
    if (plat.showComments && plat.commentaires.length === 0) {
      // Fetch the comments associated with this plate if they haven't been fetched already
      this.commentairesService.getCommentairesByPlate(plat.id).subscribe(
        (commentaires: any[]) => {
          plat.commentaires = commentaires;
        },
        (error) => {
          console.log('Error fetching comments for plate:', error);
        }
      );
    }
  }
  ratePlat(plat: any, note: number) {
    // Appel du service pour mettre à jour la note du plat
    this.platService.updatePlatNote(this.selectedMenuId, plat.id, note).subscribe(
      (response) => {
        console.log('Note mise à jour avec succès :', response);
        // Vous pouvez effectuer d'autres actions après la mise à jour réussie ici si nécessaire
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la note pour le plat', plat.id, ':', error);
        // Gérez l'erreur ici si nécessaire
      }
    );
  }
  // calculateAverageRatings(): void {
  //   this.menus.forEach((menu) => {
  //     const menuPlats = this.plats.filter((plat) => plat.menuId === menu.id);
  //     const totalRatings = menuPlats.reduce((sum, plat) => sum + plat.rating, 0);
  //     const averageRating = totalRatings / menuPlats.length;
  //     // Set the average rating to 2 decimal places.
  //     menu.rating = Math.round(averageRating * 100) / 100;
  //   });
  // }
  
  
}

  
  
  

import { Component, OnInit } from '@angular/core';
import { ListMenuService } from 'src/app/services/list-menu.service';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';
import { MatDialog } from '@angular/material/dialog'; // Importez le MatDialog;
import { PlatUpdateDialogComponent } from 'src/app/components/plat-update-dialog/plat-update-dialog.component';





@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  [x: string]: any;
menus: any[];
  plats: any[];
  menuId:number;
  showPlats = false;
  selectedMenu: any = null;




  constructor(public dialog: MatDialog ,private listMenuService: ListMenuService,private platService:PlatService ,private router: Router) { }

  ngOnInit(): void {
    this.getAllMenus()
  }
  public getAllMenus(){
    this.listMenuService.AllMenus().subscribe(
      (data)=>{
       this.menus=data;
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    );
  }
  viewPlats(menuId: number) {
   
    this.showPlats = !this.showPlats; // Toggle the showPlats variable
  
    if (this.showPlats) {
      console.log('Menu ID:', menuId);
      this.selectedMenu = this.menus.find((menu) => menu.id === menuId);
  
      this.platService.getplat(menuId).subscribe((plats) => {
        this.plats = plats;
        console.log('Plats:', plats);
      });
    } else {
      this.selectedMenu = null; // Clear the selectedMenu when hiding the plats
      this.plats = []; // Clear the plats array when hiding the plats
    }
  }
  updatePlat(plat: any): void {
    const dialogRef = this.dialog.open(PlatUpdateDialogComponent, {
      width: '400px',
      data: plat,
      panelClass: 'custom-dialog-panel'
    });

    dialogRef.afterClosed().subscribe((updatedPlat: any) => {
      if (updatedPlat) {
        console.log('Updated Plat:', updatedPlat);
        // Mettez à jour la liste des plats avec les données mises à jour
        const index = this.plats.findIndex((p) => p.id === updatedPlat.id);
        if (index !== -1) {
          this.plats[index] = updatedPlat;
        }
      }
    });
  }

  
    
  
  deletePlat(platId: number) {
    // Call the plat service to delete the plat
    this.platService.deletePlat(platId).subscribe(
      (response) => {
        console.log('Plat deleted successfully:', response);
        // After successful deletion, remove the deleted plat from the plats array
        this.plats = this.plats.filter((plat) => plat.id !== platId);
        
      },
      (error) => {
        console.log('Error deleting plat:', error);
      }
    );
  }
  refreshPlats() {
    // Call the plat service to fetch the updated list of plats for the selected menu
    this.platService.getplat(this.selectedMenu.id).subscribe(
      (plats) => {
        this.plats = plats;
        console.log('Plats:', plats);
      },
      (error) => {
        console.log('Error fetching plats:', error);
      }
    );
  }
  
  redirectToCreateMenu() {
    this.router.navigateByUrl('/create-menu');
  }
  redirectToAddPlat() {
    // Redirection vers l'interface AddPlat
    this.router.navigateByUrl('/add-plat');
  }
}

  

  
  


    
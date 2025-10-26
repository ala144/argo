import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PlatService } from 'src/app/services/plat.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-plat-update-dialog',
  templateUrl: './plat-update-dialog.component.html',
  styleUrls: ['./plat-update-dialog.component.scss']
})
export class PlatUpdateDialogComponent implements OnInit {
plat:any;
  
  constructor(
    public dialogRef: MatDialogRef<PlatUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any , // Injectez le plat à modifier en tant que données
    private platService: PlatService,public dialog: MatDialog,private router: Router ) {
    // Copiez les données du plat reçu dans une nouvelle instance pour éviter de modifier les données directement
    this.plat = { ...data };

  }
  ngOnInit(): void {  }

  // Méthode appelée lorsque l'utilisateur clique sur le bouton "Confirmer"
  onConfirm(): void {
    
    this.platService.updatePlat(this.plat.id, this.plat).subscribe(
      (updatedPlat) => {
        console.log('Plat updated successfully:', updatedPlat);
        this.dialogRef.close(updatedPlat); // Fermez la boîte de dialogue en transmettant le plat mis à jour
      },
      (error) => {
        console.log('Error updating plat:', error);
      }
    );
  }

  // Méthode appelée lorsque l'utilisateur clique sur le bouton "Annuler"
  onCancel(): void {
    // Fermez la boîte de dialogue sans rien faire
    this.dialogRef.close();
  }
}
  



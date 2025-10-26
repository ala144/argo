import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { PlatService } from './services/plat.service';

import { ReactiveFormsModule } from '@angular/forms';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PlatUpdateDialogComponent } from './components/plat-update-dialog/plat-update-dialog.component';
import { MenuFrontComponent } from './components/menu-front/menu-front.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    
     
    
  ],
  exports: [
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AddPlatComponent,
    PlatUpdateDialogComponent,
    MenuFrontComponent

    
  ],
  providers: [PlatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

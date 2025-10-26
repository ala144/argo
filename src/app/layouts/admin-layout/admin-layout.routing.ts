import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { placements } from '@popperjs/core';
import { MenuListComponent } from 'src/app/components/menu-list/menu-list.component';
import { CreateMenuComponent } from 'src/app/components/create-menu/create-menu.component';
import { AddPlatComponent } from 'src/app/components/add-plat/add-plat.component';
import { PlatUpdateDialogComponent } from 'src/app/components/plat-update-dialog/plat-update-dialog.component';
import { MenuFrontComponent } from 'src/app/components/menu-front/menu-front.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'maps',           component: MapsComponent },
    {path: 'menu',             component:MenuListComponent},
  { path: '', redirectTo: '/menus', pathMatch: 'full' },
  {path: 'create-menu',             component:CreateMenuComponent},
  {path: 'add-plat',             component:AddPlatComponent},
  {path: 'update-plat',             component:PlatUpdateDialogComponent},
  {path: 'menufront',             component:MenuFrontComponent},




];

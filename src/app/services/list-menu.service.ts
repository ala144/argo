import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListMenuService {
  menuData:any;
  restaurantId:number;

  private urlServiceApi=environment.urlServiceApi;

  constructor(private http:HttpClient) { }
  AllMenus(): Observable<any> {
    return this.http.get<any>(this.urlServiceApi+"/menu/getmenu")
  }
  createMenu(restaurantId: number, menuData: any): Observable<any> {
    const url = `${this.urlServiceApi}/menu/create/${restaurantId}`;
    return this.http.post<any>(url, menuData);
  }
  updateMenu(menu: any): Observable<any> {
    const updateUrl = `${this.urlServiceApi}/menu/update/${menu.id}`; // Remplacez 'id' par le champ approprié qui représente l'identifiant du menu dans votre API
    return this.http.put<any>(updateUrl, menu);
  }
}

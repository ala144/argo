import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  menuId:number
  Plat:any
  idplat:number
  note:number
   private urlServiceApi=environment.urlServiceApi;
 
   constructor( private http:HttpClient) { }
    getplat(menuId):Observable<any>{
    
     return this.http.get<any>(this.urlServiceApi+"/plat/plats/"+menuId
      
     )
   }
   addPlat(ajouPlatRequest: any): Observable<any> {
    const url = `${this.urlServiceApi}/plat/add?menuId=${ajouPlatRequest.menuId}`;
    return this.http.post<any>(url, ajouPlatRequest);
  }
  
  deletePlat(id: number): Observable<any> {
    const url = `${this.urlServiceApi}/plat/delete/${id}`;
    return this.http.delete<any>(url);
  }
  updatePlat(id: number, plat: any): Observable<any> {
    const url = `${this.urlServiceApi}/plat/update/${id}`;
    return this.http.put<any>(url, plat);
  }
  addCommentaire(id: number, commentaire: string): Observable<any> {
    const url = `${this.urlServiceApi}/commentaire/plats/${id}`;
    const body = { text: commentaire }; // Les données du commentaire à envoyer dans le corps de la requête
    return this.http.post<any>(url, body);
  }
  
  updatePlatNote(menuId: number, platId: number, note: number): Observable<any> {
    const url = `${this.urlServiceApi}/plat/menus/${menuId}/plats/${platId}/rate`;
    const updateRequest = { note };
    return this.http.put<any>(url, updateRequest);
  }
  
}

   

   


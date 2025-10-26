import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  platId:number;
  private urlServiceApi=environment.urlServiceApi;


  constructor(private http: HttpClient) { }

  getCommentairesByPlate(platId: number): Observable<any> {
    const url = `${this.urlServiceApi}/commentaire/commentaires-plats/${platId}`;
    return this.http.get<any>(url);
  }
}
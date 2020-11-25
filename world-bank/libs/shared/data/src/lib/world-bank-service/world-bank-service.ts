import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Continente } from '../../../../models/interfaces/src/lib/continente.model';

@Injectable({
  providedIn: 'root'
})
export class WorldBankService {

  private apiUrl = "http://api.worldbank.org/v2/";

  constructor(private http: HttpClient) {}

  public obtenerInfoRegion$(codigo:string): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}region/${codigo}/country?per_page=1000&format=json`).pipe(
      map(resp => {
        return resp[1];
      })
    );
  }

  public obtenerInfoPais$(codigo:string): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}country/${codigo}?format=json`).pipe(
      map(resp => {
        return resp[1];
      })
    );
  }

  public obtenerRegionesContinentales$(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}region/?format=json`).pipe(
      map(resp => {
        return resp[1].filter(item => item.id !== '');
      })
    );
  }

}

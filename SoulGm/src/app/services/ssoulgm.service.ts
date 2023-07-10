import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Isoulgm } from '../interfaces/isoulgm';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Isoulgmm } from '../interfaces/isoulgmm';


@Injectable({
  providedIn: 'root'
})

export class SsoulgmService {

  constructor(private http:HttpClient) { }

listarSoulgm():Observable<Isoulgm>{
  return this.http.get<Isoulgm>(`${environment.apiURL}/Soulgm`)

}
crearSoulgm(newSoulgm:Isoulgmm):Observable<Isoulgmm>{
  return this.http.post<Isoulgmm>(`${environment.apiURL}/Soulgm`, newSoulgm)
}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  apiUrl = 'http://localhost:3001/api/appareils/';

  appareilList = [
    { name: 'Machine à laver', status: 'Eteint' },
    { name: 'Tv', status: 'Allumé' },
    { name: 'Climatiseur', status: 'Eteint' },
    { name: 'PC', status: 'Allumé' },
    { name: 'Micro onde', status: 'Eteint' },
    { name: 'Four', status: 'Allumé' },
    { name: 'Aspirateur', status: 'Eteint' }
  ];

  constructor(private http: HttpClient) { }

  // Méthodes locales (sans API)
  getAppareilsLocal() {
    return this.appareilList;
  }

  switchOnAll() {
    for (let appareil of this.appareilList) {
      appareil.status = 'Allumé';
    }
  }

  switchOffAll() {
    for (let appareil of this.appareilList) {
      appareil.status = 'Eteint';
    }
  }

  switchOneOn(index: number) {
    this.appareilList[index].status = 'Allumé';
  }

  switchOneOff(index: number) {
    this.appareilList[index].status = 'Eteint';
  }

  switchOne(index: number) {
    if (this.appareilList[index].status === 'Allumé') {
      this.switchOneOff(index);
    } else {
      this.switchOneOn(index);
    }
  }

  // Méthodes API (avec backend)
  getAppareils(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAppareilById(id: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + id);
  }

  createAppareil(appareil: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, appareil);
  }

  updateAppareil(id: string, appareil: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + id, appareil);
  }

  deleteAppareil(id: string): Observable<any> {
    return this.http.delete<any>(this.apiUrl + id);
  }
}

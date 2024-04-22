import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'https://api.sammit.online:8443/portfolio';
  private sessionToken: string | null = localStorage.getItem('sessionToken'); // Retrieve from localStorage

  constructor(private http: HttpClient) { }



  getProjects() {
    return this.http.get<any>(this.BASE_URL + '/projects/loadAllProjects');
  }

  getExperience() {
    return this.http.get<any>(this.BASE_URL + '/experience/getAllExperience');
  }

  getResume(): Observable<Blob> {

    return this.http.get(this.BASE_URL + '/resume/view', {
      responseType: 'blob',
    });
  }
}
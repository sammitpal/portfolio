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

  createSession() {
    return this.http.get(this.BASE_URL + '/session/create', { responseType: 'text' });
  }

  getProjects() {
    if (!this.sessionToken) {
      return this.createSession().pipe(
        tap(sessionToken => {
          this.sessionToken = sessionToken;
          localStorage.setItem('sessionToken', sessionToken); // Store in localStorage
        }),
        switchMap(() => {
          return this.http.get<any>(this.BASE_URL + '/projects/loadAllProjects', {
            headers: {
              'sessionToken': `${this.sessionToken}`
            }
          });
        })
      );
    } else {
      return this.http.get<any>(this.BASE_URL + '/projects/loadAllProjects', {
        headers: {
          'sessionToken': `${this.sessionToken}`
        }
      });
    }
  }

  getExperience() {
    if (!this.sessionToken) {
      return this.createSession().pipe(
        tap(sessionToken => {
          this.sessionToken = sessionToken;
          localStorage.setItem('sessionToken', sessionToken); // Store in localStorage
        }),
        switchMap(() => {
          return this.http.get<any>(this.BASE_URL + '/experience/getAllExperience', {
            headers: {
              'sessionToken': `${this.sessionToken}`
            }
          });
        })
      );
    } else {
      return this.http.get<any>(  this.BASE_URL + '/experience/getAllExperience', {
        headers: {
          'sessionToken': `${this.sessionToken}`
        }
      });
    }
  }

  getResume(): Observable<Blob> {
    if (!this.sessionToken) {
      return this.createSession().pipe(
        tap(sessionToken => {
          this.sessionToken = sessionToken;
          localStorage.setItem('sessionToken', sessionToken); // Store in localStorage
        }),
        switchMap(() => {
          return this.http.get(this.BASE_URL + '/resume/view', {
            responseType: 'blob',
            headers: {
              'sessionToken': `${this.sessionToken}`,
              'Content-Type': 'application/pdf'
            }
          });
        })
      );
    } else {
      return this.http.get(this.BASE_URL + '/resume/view', {
        responseType: 'blob',
        headers: {
          'sessionToken': `${this.sessionToken}`,
          'Content-Type': 'application/pdf'
        }
      });
    }
  }
}
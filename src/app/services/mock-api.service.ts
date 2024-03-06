import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.users)
    );
  }
}

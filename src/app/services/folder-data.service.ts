import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Folder } from '../dashboard/Folder.model';

@Injectable({
  providedIn: 'root',
})
export class FolderDataService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  getFolderData(): Observable<Folder[]> {
    return this.http.get<Folder[]>(`${this.apiUrl}/folder`);
  }
}

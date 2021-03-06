import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

import {Note} from "./note";

@Injectable({
  providedIn: 'root'
})
export class APIService {

  lastNoteId: number = 0;
  notes: Note[] = [];

  constructor(private http: HttpClient) { }

  getUsers = () => {
    return this.http.get('http://localhost:4200/users');
  }

}

import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataMenuItem } from "../components/menu/menu.component";

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  constructor(
    private http: HttpClient
  ) { }

  getDataMenu(): Observable<DataMenuItem[]> {
    return this.http.get('assets/data/menu.json')
      .pipe(
        map((data: any) => data)
      )
  }
}

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BrState } from './br-state';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getBrStates(){
    return this.http.get<BrState[]>('assets/dropdown-service/br-states.json')
  }
}

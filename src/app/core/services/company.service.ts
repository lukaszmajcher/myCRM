import { Company } from './../models/Company';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CompanyService {

  companies: Company[];

  constructor() {
    this.companies = [
      {id: 1, name: 'Majchrosoft Łukasz Majcher', shortName: 'Majchrosoft', type: 'Klient'},
      {id: 2, name: 'Rajtax Jadwiga Radecka', shortName: 'Rajtax', type: 'Klient'},
      {id: 3, name: 'SoftNet S.P. z O. O.', shortName: 'SoftNet', type: 'Klient'}
    ];
   }


  getAll(): Observable<Company[]>{
    return of(this.companies);
  }

  getCompany(id: number): Observable<Company>{
    return of(this.companies.find(c => c.id == id))
  }

}

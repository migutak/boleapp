import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoleService {

  constructor(
    private httpClient: HttpClient
  ) { }

  membersbyid(memberno) {
    return this.httpClient.get(environment.api + '/bole/' + memberno);
  }

  members() {
    return this.httpClient.get<Array<any>>(environment.api + '/bole');
  }
}

import { Component, OnInit } from '@angular/core';
import { BoleService } from '../bole.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getmembers()
  }

  getmembers() {
    this.httpClient.get<any>(environment.api + '/bole').subscribe(resp => {
      this.members = resp;
    })
  }

  details(memberno) {

  }

}

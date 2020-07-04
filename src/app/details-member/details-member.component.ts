import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details-member',
  templateUrl: './details-member.component.html',
  styleUrls: ['./details-member.component.css']
})
export class DetailsMemberComponent implements OnInit {

  memberno: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.memberno = this.route.snapshot.paramMap.get("memberno");

    
    
    console.log(this.memberno)
  }

}

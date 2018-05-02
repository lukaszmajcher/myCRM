import { Company } from './../../../core/models/Company';
import { CompanyService } from './../../../core/services/company.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  company: Company;

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute
  ) {  }

  ngOnInit() {
    let id = this.route.snapshot.params["id"];

    this.companyService.getCompany(id)
      .subscribe(company => this.company = company)
  }

  onDeleteClick(){
    
  }

}

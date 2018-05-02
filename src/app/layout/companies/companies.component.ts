import { Company } from './../../core/models/Company';
import { CompanyService } from './../../core/services/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];


  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getAll()
      .subscribe(c => this.companies = c);
  }

}

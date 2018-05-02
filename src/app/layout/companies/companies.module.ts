import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { CompanyService } from './../../core/services/company.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    PageHeaderModule
  ],
  declarations: [CompaniesComponent, CompanyDetailComponent],
  providers: [CompanyService],
})
export class CompaniesModule { }

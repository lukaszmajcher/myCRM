import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies.component';

const routes: Routes = [
  {path: '', component: CompaniesComponent },
  {path: ':id', component: CompanyDetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }

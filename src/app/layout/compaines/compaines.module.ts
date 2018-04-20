import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompainesRoutingModule } from './compaines-routing.module';
import { CompainesComponent } from './compaines.component';

@NgModule({
  imports: [
    CommonModule,
    CompainesRoutingModule
  ],
  declarations: [CompainesComponent]
})
export class CompainesModule { }

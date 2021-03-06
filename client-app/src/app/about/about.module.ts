import { AboutRoutingModule } from './about-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    RouterModule, 
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }

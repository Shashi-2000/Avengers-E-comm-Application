import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DistNavbarComponents } from './dist-navbar/dist-navbar.component';

import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DistNavbarComponents
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    MatButtonModule
  ],
  exports : [DistNavbarComponents]
})
export class SharedModule { }

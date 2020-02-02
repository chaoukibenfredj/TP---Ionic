import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPersonPageRoutingModule } from './details-person-routing.module';

import { DetailsPersonPage } from './details-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DetailsPersonPageRoutingModule
  ],
  declarations: [DetailsPersonPage]
})
export class DetailsPersonPageModule {}

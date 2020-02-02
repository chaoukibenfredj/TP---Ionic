import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPersonPage } from './details-person.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPersonPageRoutingModule {}

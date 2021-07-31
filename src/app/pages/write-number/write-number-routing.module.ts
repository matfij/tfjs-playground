import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WriteNumberComponent } from './write-number.component';

const routes: Routes = [
  {
    path: '',
    component: WriteNumberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriteNumberRoutingModule {}

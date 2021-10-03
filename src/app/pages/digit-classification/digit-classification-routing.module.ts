import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitClassificationComponent } from './digit-classification.component';

const routes: Routes = [
  {
    path: '',
    component: DigitClassificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitClassificationRoutingModule {}

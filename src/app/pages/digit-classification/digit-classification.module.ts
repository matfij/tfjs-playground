import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitClassificationComponent } from './digit-classification.component';
import { CoreModule } from 'src/app/@core/core.module';
import { DigitClassificationRoutingModule } from './digit-classification-routing.module';

@NgModule({
  declarations: [
    DigitClassificationComponent
  ],
  imports: [
    CommonModule,
    DigitClassificationRoutingModule,
    CoreModule.forChild()
  ]
})
export class WriteNumberModule {}

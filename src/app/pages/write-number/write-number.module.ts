import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteNumberComponent } from './write-number.component';
import { CoreModule } from 'src/app/@core/core.module';
import { WriteNumberRoutingModule } from './write-number-routing.module';

@NgModule({
  declarations: [
    WriteNumberComponent
  ],
  imports: [
    CommonModule,
    WriteNumberRoutingModule,
    CoreModule.forChild()
  ]
})
export class WriteNumberModule {}

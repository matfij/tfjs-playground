import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiscComponent } from './misc.component';
import { MiscRoutingModule } from './misc-routing.module';
import { CoreModule } from 'src/app/@core/core.module';


@NgModule({
  declarations: [
    MiscComponent
  ],
  imports: [
    CommonModule,
    MiscRoutingModule,
    CoreModule.forChild()
  ]
})
export class MiscModule { }

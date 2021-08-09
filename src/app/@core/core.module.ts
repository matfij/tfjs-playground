import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignaturePadComponent } from 'src/app/components/signature-pad/signature-pad.component';
import { TranslateModule } from '@ngx-translate/core';
import { DrawableDirective } from 'src/app/utils/directives/drawable.directive';
import { SimpleChartComponent } from 'src/app/components/simple-chart/simple-chart.component';
import { BootstrapModule } from './submodules/bootstrap.module';

const COMPONENTS = [
  SignaturePadComponent,
  SimpleChartComponent
];

const DIRECTIVES = [
  DrawableDirective
];

const MODULES = [
  TranslateModule.forChild(),
  BootstrapModule
];

const CHILD_PROVIDERS = [
  ...TranslateModule.forChild().providers,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    MODULES
  ]
})
export class CoreModule {

  public static forChild(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: CHILD_PROVIDERS
    };
  }
}

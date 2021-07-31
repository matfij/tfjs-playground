import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignaturePadComponent } from 'src/app/components/signature-pad/signature-pad.component';
import { TranslateModule } from '@ngx-translate/core';
import { SignaturePadModule  } from 'angular2-signaturepad';

const COMPONENTS = [
  SignaturePadComponent,
];

const MODULES = [
  TranslateModule.forChild(),
  SignaturePadModule,
];

const CHILD_PROVIDERS = [
  ...TranslateModule.forChild().providers,
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...COMPONENTS,
    MODULES
  ]
})
export class CoreModule {

  public static forChild(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: CHILD_PROVIDERS
    }
  }
}

import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { numberClassifierReducer } from './state/number-classifier/reducer';
import { ConfigurationService } from './services/configuration.service';

export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      { state: numberClassifierReducer }
    ),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      },
      extend: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    configurationService: ConfigurationService,
    translateService: TranslateService
  ) {
    const availableLangs = configurationService.appConfig.AVAILABLE_LANGS;
    const defaultLang = configurationService.appConfig.DEFAULT_LANG;

    translateService.addLangs(availableLangs);
    translateService.setDefaultLang(defaultLang);
  }
}

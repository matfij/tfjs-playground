import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppConfig } from './app/definitions/interfaces/config';
import { APP_CONFIG } from './app/services/configuration.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

async function start() {
  const config: AppConfig = await fetch('/assets/config/config.json').then(each => each.json());

  platformBrowserDynamic(
    [{ provide: APP_CONFIG, useValue: config}]
  ).bootstrapModule(AppModule).catch(err => console.error(err));
}

start().then();

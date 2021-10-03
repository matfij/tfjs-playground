import { Inject, Injectable, InjectionToken } from '@angular/core';
import { AppConfig } from '../definitions/interfaces/config';

export const APP_CONFIG = new InjectionToken<AppConfig>('Application configuration');

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public appConfig: AppConfig;

  constructor(
    @Inject(APP_CONFIG) config: AppConfig
  ) {
    this.appConfig = config;
  }
}

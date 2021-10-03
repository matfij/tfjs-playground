import { TestBed } from '@angular/core/testing';
import { AppConfig } from '../definitions/interfaces/config';
import { APP_CONFIG, ConfigurationService } from './configuration.service';

const defaultConfig: AppConfig = {
  TEST_VERSION: true,
  DEFAULT_LANG: 'en',
  AVAILABLE_LANGS: ['en'],
  QUICK_STORE_KEY: 'test-',
}

describe('ConfigurationService', () => {
  let service: ConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: APP_CONFIG, useValue: defaultConfig }
      ]
    });
    service = TestBed.inject(ConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

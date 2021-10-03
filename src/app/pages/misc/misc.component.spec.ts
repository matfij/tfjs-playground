import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';

import { MiscComponent } from './misc.component';

describe('MiscComponent', () => {
  let component: MiscComponent;
  let fixture: ComponentFixture<MiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TranslateModule.forChild() ],
      providers: [ TranslateStore ],
      declarations: [ MiscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';

import { WriteNumberComponent } from './write-number.component';

describe('WriteNumberComponent', () => {
  let component: WriteNumberComponent;
  let fixture: ComponentFixture<WriteNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TranslateModule.forChild() ],
      providers: [ TranslateStore ],
      declarations: [ WriteNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

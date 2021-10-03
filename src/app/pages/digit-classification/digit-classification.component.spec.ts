import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { DigitClassificationComponent } from './digit-classification.component';

describe('WriteNumberComponent', () => {
  let component: DigitClassificationComponent;
  let fixture: ComponentFixture<DigitClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TranslateModule.forChild() ],
      providers: [ TranslateStore ],
      declarations: [ DigitClassificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

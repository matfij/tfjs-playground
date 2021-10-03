import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { ToxicityAnalysisComponent } from './toxicity-analysis.component';

describe('ToxicityAnalysisComponent', () => {
  let component: ToxicityAnalysisComponent;
  let fixture: ComponentFixture<ToxicityAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToxicityAnalysisComponent ],
      imports: [
        TranslateModule.forChild()
      ],
      providers: [
        TranslateStore
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxicityAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

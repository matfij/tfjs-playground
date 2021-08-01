import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SignaturePadComponent } from './signature-pad.component';

describe('SignaturePadComponent', () => {
  let component: SignaturePadComponent;
  let fixture: ComponentFixture<SignaturePadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignaturePadComponent ],
      imports: [ SignaturePadModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignaturePadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

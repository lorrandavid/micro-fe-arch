import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepIdentificationComponent } from './step-identification.component';

describe('StepIdentificationComponent', () => {
  let component: StepIdentificationComponent;
  let fixture: ComponentFixture<StepIdentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepIdentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

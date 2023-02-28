import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormReusablecomComponent } from './dynamic-form-reusablecom.component';

describe('DynamicFormReusablecomComponent', () => {
  let component: DynamicFormReusablecomComponent;
  let fixture: ComponentFixture<DynamicFormReusablecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormReusablecomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormReusablecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

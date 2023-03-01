import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTableComponentComponent } from './reusable-table-component.component';

describe('ReusableTableComponentComponent', () => {
  let component: ReusableTableComponentComponent;
  let fixture: ComponentFixture<ReusableTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableTableComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

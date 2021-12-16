import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcollectionComponent } from './totalcollection.component';

describe('TotalcollectionComponent', () => {
  let component: TotalcollectionComponent;
  let fixture: ComponentFixture<TotalcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalcollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

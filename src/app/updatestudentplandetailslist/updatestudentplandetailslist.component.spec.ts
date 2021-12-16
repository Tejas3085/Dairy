import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestudentplandetailslistComponent } from './updatestudentplandetailslist.component';

describe('UpdatestudentplandetailslistComponent', () => {
  let component: UpdatestudentplandetailslistComponent;
  let fixture: ComponentFixture<UpdatestudentplandetailslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestudentplandetailslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatestudentplandetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

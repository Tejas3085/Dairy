import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefranchisedetailsComponent } from './updatefranchisedetails.component';

describe('UpdatefranchisedetailsComponent', () => {
  let component: UpdatefranchisedetailsComponent;
  let fixture: ComponentFixture<UpdatefranchisedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefranchisedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefranchisedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

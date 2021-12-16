import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersubscriptiondetailsComponent } from './usersubscriptiondetails.component';

describe('UsersubscriptiondetailsComponent', () => {
  let component: UsersubscriptiondetailsComponent;
  let fixture: ComponentFixture<UsersubscriptiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersubscriptiondetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersubscriptiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

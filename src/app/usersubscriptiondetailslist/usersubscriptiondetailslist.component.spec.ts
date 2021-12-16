import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersubscriptiondetailslistComponent } from './usersubscriptiondetailslist.component';

describe('UsersubscriptiondetailslistComponent', () => {
  let component: UsersubscriptiondetailslistComponent;
  let fixture: ComponentFixture<UsersubscriptiondetailslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersubscriptiondetailslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersubscriptiondetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

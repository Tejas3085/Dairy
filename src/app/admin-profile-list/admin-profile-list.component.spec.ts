import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileListComponent } from './admin-profile-list.component';

describe('AdminProfileListComponent', () => {
  let component: AdminProfileListComponent;
  let fixture: ComponentFixture<AdminProfileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProfileListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMemberHealthInfoComponent } from './update-member-health-info.component';

describe('UpdateMemberHealthInfoComponent', () => {
  let component: UpdateMemberHealthInfoComponent;
  let fixture: ComponentFixture<UpdateMemberHealthInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMemberHealthInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMemberHealthInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

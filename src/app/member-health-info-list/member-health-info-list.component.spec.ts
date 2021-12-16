import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberHealthInfoListComponent } from './member-health-info-list.component';

describe('MemberHealthInfoListComponent', () => {
  let component: MemberHealthInfoListComponent;
  let fixture: ComponentFixture<MemberHealthInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberHealthInfoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberHealthInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

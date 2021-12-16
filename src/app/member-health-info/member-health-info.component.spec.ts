import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberHealthInfoComponent } from './member-health-info.component';

describe('MemberHealthInfoComponent', () => {
  let component: MemberHealthInfoComponent;
  let fixture: ComponentFixture<MemberHealthInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberHealthInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberHealthInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

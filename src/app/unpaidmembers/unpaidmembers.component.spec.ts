import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpaidmembersComponent } from './unpaidmembers.component';

describe('UnpaidmembersComponent', () => {
  let component: UnpaidmembersComponent;
  let fixture: ComponentFixture<UnpaidmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnpaidmembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpaidmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

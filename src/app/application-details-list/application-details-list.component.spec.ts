import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDetailsListComponent } from './application-details-list.component';

describe('ApplicationDetailsListComponent', () => {
  let component: ApplicationDetailsListComponent;
  let fixture: ComponentFixture<ApplicationDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmemberhealthinfoComponent } from './viewmemberhealthinfo.component';

describe('ViewmemberhealthinfoComponent', () => {
  let component: ViewmemberhealthinfoComponent;
  let fixture: ComponentFixture<ViewmemberhealthinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmemberhealthinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmemberhealthinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

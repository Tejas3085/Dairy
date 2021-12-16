import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesubscriptionComponent } from './updatesubscription.component';

describe('UpdatesubscriptionComponent', () => {
  let component: UpdatesubscriptionComponent;
  let fixture: ComponentFixture<UpdatesubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HurwiczComponent } from './hurwicz.component';

describe('HurwiczComponent', () => {
  let component: HurwiczComponent;
  let fixture: ComponentFixture<HurwiczComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HurwiczComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HurwiczComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

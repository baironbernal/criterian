import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessimistComponent } from './pessimist.component';

describe('PessimistComponent', () => {
  let component: PessimistComponent;
  let fixture: ComponentFixture<PessimistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessimistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessimistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

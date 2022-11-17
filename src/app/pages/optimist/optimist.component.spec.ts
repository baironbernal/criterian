import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimistComponent } from './optimist.component';

describe('OptimistComponent', () => {
  let component: OptimistComponent;
  let fixture: ComponentFixture<OptimistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

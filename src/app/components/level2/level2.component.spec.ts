import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2Component } from './level2.component';

describe('Level1Component', () => {
  let component: Level2Component;
  let fixture: ComponentFixture<Level2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

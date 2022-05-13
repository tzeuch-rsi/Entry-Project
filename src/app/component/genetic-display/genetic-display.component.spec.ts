import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneticDisplayComponent } from './genetic-display.component';

describe('GeneticDisplayComponent', () => {
  let component: GeneticDisplayComponent;
  let fixture: ComponentFixture<GeneticDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneticDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneticDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

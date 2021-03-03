import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuneByIdComponent } from './rune-by-id.component';

describe('RuneByIdComponent', () => {
  let component: RuneByIdComponent;
  let fixture: ComponentFixture<RuneByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuneByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuneByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

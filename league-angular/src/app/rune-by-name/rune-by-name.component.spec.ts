import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuneByNameComponent } from './rune-by-name.component';

describe('RuneByNameComponent', () => {
  let component: RuneByNameComponent;
  let fixture: ComponentFixture<RuneByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuneByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuneByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

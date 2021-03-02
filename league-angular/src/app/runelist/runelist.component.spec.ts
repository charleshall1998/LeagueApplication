import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunelistComponent } from './runelist.component';

describe('RunelistComponent', () => {
  let component: RunelistComponent;
  let fixture: ComponentFixture<RunelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

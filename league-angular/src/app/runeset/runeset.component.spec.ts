import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunesetComponent } from './runeset.component';

describe('RunesetComponent', () => {
  let component: RunesetComponent;
  let fixture: ComponentFixture<RunesetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunesetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerspellsetComponent } from './summonerspellset.component';

describe('SummonerspellsetComponent', () => {
  let component: SummonerspellsetComponent;
  let fixture: ComponentFixture<SummonerspellsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonerspellsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerspellsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

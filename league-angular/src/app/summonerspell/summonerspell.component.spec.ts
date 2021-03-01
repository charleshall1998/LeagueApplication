import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerspellComponent } from './summonerspell.component';

describe('SummonerspellComponent', () => {
  let component: SummonerspellComponent;
  let fixture: ComponentFixture<SummonerspellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonerspellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerspellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

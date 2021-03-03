import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerspellByIdComponent } from './summonerspell-by-id.component';

describe('SummonerspellByIdComponent', () => {
  let component: SummonerspellByIdComponent;
  let fixture: ComponentFixture<SummonerspellByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonerspellByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerspellByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

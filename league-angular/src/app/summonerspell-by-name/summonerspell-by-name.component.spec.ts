import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerspellByNameComponent } from './summonerspell-by-name.component';

describe('SummonerspellByNameComponent', () => {
  let component: SummonerspellByNameComponent;
  let fixture: ComponentFixture<SummonerspellByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonerspellByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerspellByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

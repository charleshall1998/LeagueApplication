import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerspelllistComponent } from './summonerspelllist.component';

describe('SummonerspelllistComponent', () => {
  let component: SummonerspelllistComponent;
  let fixture: ComponentFixture<SummonerspelllistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonerspelllistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerspelllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

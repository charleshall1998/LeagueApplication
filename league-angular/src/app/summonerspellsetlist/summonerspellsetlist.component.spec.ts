import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerspellsetlistComponent } from './summonerspellsetlist.component';

describe('SummonerspellsetlistComponent', () => {
  let component: SummonerspellsetlistComponent;
  let fixture: ComponentFixture<SummonerspellsetlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonerspellsetlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerspellsetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

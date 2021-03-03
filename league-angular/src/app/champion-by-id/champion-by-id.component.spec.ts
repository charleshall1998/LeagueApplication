import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionByIdComponent } from './champion-by-id.component';

describe('ChampionByIdComponent', () => {
  let component: ChampionByIdComponent;
  let fixture: ComponentFixture<ChampionByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

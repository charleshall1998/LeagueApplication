import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionByNameComponent } from './champion-by-name.component';

describe('ChampionByNameComponent', () => {
  let component: ChampionByNameComponent;
  let fixture: ComponentFixture<ChampionByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

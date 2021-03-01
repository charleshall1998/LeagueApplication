import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionlistComponent } from './championlist.component';

describe('ChampionlistComponent', () => {
  let component: ChampionlistComponent;
  let fixture: ComponentFixture<ChampionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

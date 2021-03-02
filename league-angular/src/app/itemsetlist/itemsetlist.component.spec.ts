import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsetlistComponent } from './itemsetlist.component';

describe('ItemsetlistComponent', () => {
  let component: ItemsetlistComponent;
  let fixture: ComponentFixture<ItemsetlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsetlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

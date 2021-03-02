import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsetComponent } from './itemset.component';

describe('ItemsetComponent', () => {
  let component: ItemsetComponent;
  let fixture: ComponentFixture<ItemsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

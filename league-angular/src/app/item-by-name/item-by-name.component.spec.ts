import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemByNameComponent } from './item-by-name.component';

describe('ItemByNameComponent', () => {
  let component: ItemByNameComponent;
  let fixture: ComponentFixture<ItemByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

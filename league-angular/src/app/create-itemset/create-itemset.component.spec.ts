import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemsetComponent } from './create-itemset.component';

describe('CreateItemsetComponent', () => {
  let component: CreateItemsetComponent;
  let fixture: ComponentFixture<CreateItemsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateItemsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItemsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

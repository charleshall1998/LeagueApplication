import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemsetComponent } from './delete-itemset.component';

describe('DeleteItemsetComponent', () => {
  let component: DeleteItemsetComponent;
  let fixture: ComponentFixture<DeleteItemsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteItemsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteItemsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

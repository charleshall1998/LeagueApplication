import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemsetComponent } from './update-itemset.component';

describe('UpdateItemsetComponent', () => {
  let component: UpdateItemsetComponent;
  let fixture: ComponentFixture<UpdateItemsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateItemsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItemsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

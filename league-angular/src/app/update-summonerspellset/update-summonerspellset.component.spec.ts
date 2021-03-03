import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSummonerspellsetComponent } from './update-summonerspellset.component';

describe('UpdateSummonerspellsetComponent', () => {
  let component: UpdateSummonerspellsetComponent;
  let fixture: ComponentFixture<UpdateSummonerspellsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSummonerspellsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSummonerspellsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

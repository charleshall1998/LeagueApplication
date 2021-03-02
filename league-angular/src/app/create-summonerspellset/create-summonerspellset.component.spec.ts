import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSummonerspellsetComponent } from './create-summonerspellset.component';

describe('CreateSummonerspellsetComponent', () => {
  let component: CreateSummonerspellsetComponent;
  let fixture: ComponentFixture<CreateSummonerspellsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSummonerspellsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSummonerspellsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

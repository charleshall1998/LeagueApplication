import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSummonerspellsetComponent } from './delete-summonerspellset.component';

describe('DeleteSummonerspellsetComponent', () => {
  let component: DeleteSummonerspellsetComponent;
  let fixture: ComponentFixture<DeleteSummonerspellsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSummonerspellsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSummonerspellsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

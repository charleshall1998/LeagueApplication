import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRunesetComponent } from './delete-runeset.component';

describe('DeleteRunesetComponent', () => {
  let component: DeleteRunesetComponent;
  let fixture: ComponentFixture<DeleteRunesetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRunesetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRunesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRunesetComponent } from './update-runeset.component';

describe('UpdateRunesetComponent', () => {
  let component: UpdateRunesetComponent;
  let fixture: ComponentFixture<UpdateRunesetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRunesetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRunesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

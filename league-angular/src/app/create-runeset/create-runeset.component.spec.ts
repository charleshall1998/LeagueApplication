import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRunesetComponent } from './create-runeset.component';

describe('CreateRunesetComponent', () => {
  let component: CreateRunesetComponent;
  let fixture: ComponentFixture<CreateRunesetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRunesetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRunesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

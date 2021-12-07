import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerShellComponent } from './messenger-shell.component';

describe('MessengerShellComponent', () => {
  let component: MessengerShellComponent;
  let fixture: ComponentFixture<MessengerShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengerShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

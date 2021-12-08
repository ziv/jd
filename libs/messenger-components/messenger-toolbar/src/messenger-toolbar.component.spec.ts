import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerToolbarComponent } from './messenger-menu.component';

describe('MessengerMenuComponent', () => {
  let component: MessengerToolbarComponent;
  let fixture: ComponentFixture<MessengerToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessengerToolbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

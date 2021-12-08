import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerMenuComponent } from './messenger-menu.component';

describe('MessengerMenuComponent', () => {
  let component: MessengerMenuComponent;
  let fixture: ComponentFixture<MessengerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessengerMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

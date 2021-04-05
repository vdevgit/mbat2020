import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsRegistrationComponent } from './events-registration.component';

describe('EventsRegistrationComponent', () => {
  let component: EventsRegistrationComponent;
  let fixture: ComponentFixture<EventsRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

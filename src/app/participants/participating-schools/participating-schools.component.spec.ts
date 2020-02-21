import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipatingSchoolsComponent } from './participating-schools.component';

describe('ParticipatingSchoolsComponent', () => {
  let component: ParticipatingSchoolsComponent;
  let fixture: ComponentFixture<ParticipatingSchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipatingSchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipatingSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

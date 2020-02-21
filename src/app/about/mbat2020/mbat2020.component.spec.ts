import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mbat2020Component } from './mbat2020.component';

describe('Mbat2020Component', () => {
  let component: Mbat2020Component;
  let fixture: ComponentFixture<Mbat2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mbat2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mbat2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

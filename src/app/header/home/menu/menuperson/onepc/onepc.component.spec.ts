import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepcComponent } from './onepc.component';

describe('OnepcComponent', () => {
  let component: OnepcComponent;
  let fixture: ComponentFixture<OnepcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnepcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnepcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

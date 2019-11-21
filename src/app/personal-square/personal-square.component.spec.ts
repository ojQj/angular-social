import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSquareComponent } from './personal-square.component';

describe('PersonalSquareComponent', () => {
  let component: PersonalSquareComponent;
  let fixture: ComponentFixture<PersonalSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadToDoComponent } from './head-to-do.component';

describe('HeadToDoComponent', () => {
  let component: HeadToDoComponent;
  let fixture: ComponentFixture<HeadToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadToDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterScheduleComponent } from './master-schedule.component';

describe('MasterScheduleComponent', () => {
  let component: MasterScheduleComponent;
  let fixture: ComponentFixture<MasterScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

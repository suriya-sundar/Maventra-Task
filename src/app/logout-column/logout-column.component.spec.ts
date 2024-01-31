import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutColumnComponent } from './logout-column.component';

describe('LogoutColumnComponent', () => {
  let component: LogoutColumnComponent;
  let fixture: ComponentFixture<LogoutColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutColumnComponent]
    });
    fixture = TestBed.createComponent(LogoutColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

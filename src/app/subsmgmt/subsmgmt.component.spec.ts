import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsmgmtComponent } from './subsmgmt.component';

describe('SubsmgmtComponent', () => {
  let component: SubsmgmtComponent;
  let fixture: ComponentFixture<SubsmgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsmgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsmgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

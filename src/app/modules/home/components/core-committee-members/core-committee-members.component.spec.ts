import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCommitteeMembersComponent } from './core-committee-members.component';

describe('CoreCommitteeMembersComponent', () => {
  let component: CoreCommitteeMembersComponent;
  let fixture: ComponentFixture<CoreCommitteeMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreCommitteeMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreCommitteeMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

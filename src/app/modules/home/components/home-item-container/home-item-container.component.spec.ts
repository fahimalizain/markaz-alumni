import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeItemContainerComponent } from './home-item-container.component';

describe('HomeItemContainerComponent', () => {
  let component: HomeItemContainerComponent;
  let fixture: ComponentFixture<HomeItemContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeItemContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

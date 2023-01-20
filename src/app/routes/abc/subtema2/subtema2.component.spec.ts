import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcSubtema2Component } from './subtema2.component';

describe('AbcSubtema2Component', () => {
  let component: AbcSubtema2Component;
  let fixture: ComponentFixture<AbcSubtema2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcSubtema2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcSubtema2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

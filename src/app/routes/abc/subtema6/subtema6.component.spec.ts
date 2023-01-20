import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcSubtema6Component } from './subtema6.component';

describe('AbcSubtema6Component', () => {
  let component: AbcSubtema6Component;
  let fixture: ComponentFixture<AbcSubtema6Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcSubtema6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcSubtema6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

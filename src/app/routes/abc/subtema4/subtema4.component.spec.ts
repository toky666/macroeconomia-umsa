import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcSubtema4Component } from './subtema4.component';

describe('AbcSubtema4Component', () => {
  let component: AbcSubtema4Component;
  let fixture: ComponentFixture<AbcSubtema4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcSubtema4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcSubtema4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

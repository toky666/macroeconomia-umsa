import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcSubtema3Component } from './subtema3.component';

describe('AbcSubtema3Component', () => {
  let component: AbcSubtema3Component;
  let fixture: ComponentFixture<AbcSubtema3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcSubtema3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcSubtema3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

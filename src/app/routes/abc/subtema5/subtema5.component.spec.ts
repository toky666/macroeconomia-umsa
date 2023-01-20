import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcSubtema5Component } from './subtema5.component';

describe('AbcSubtema5Component', () => {
  let component: AbcSubtema5Component;
  let fixture: ComponentFixture<AbcSubtema5Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcSubtema5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcSubtema5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

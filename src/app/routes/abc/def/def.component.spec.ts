import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcDefComponent } from './def.component';

describe('AbcDefComponent', () => {
  let component: AbcDefComponent;
  let fixture: ComponentFixture<AbcDefComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

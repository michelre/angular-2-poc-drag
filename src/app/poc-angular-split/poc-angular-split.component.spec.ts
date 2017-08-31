import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocAngularSplitComponent } from './poc-angular-split.component';

describe('PocAngularSplitComponent', () => {
  let component: PocAngularSplitComponent;
  let fixture: ComponentFixture<PocAngularSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocAngularSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocAngularSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

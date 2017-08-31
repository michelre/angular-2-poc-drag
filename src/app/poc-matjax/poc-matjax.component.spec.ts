import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocMatjaxComponent } from './poc-matjax.component';

describe('PocMatjaxComponent', () => {
  let component: PocMatjaxComponent;
  let fixture: ComponentFixture<PocMatjaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocMatjaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocMatjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

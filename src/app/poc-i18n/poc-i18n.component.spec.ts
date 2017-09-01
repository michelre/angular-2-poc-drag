import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocI18nComponent } from './poc-i18n.component';

describe('PocI18nComponent', () => {
  let component: PocI18nComponent;
  let fixture: ComponentFixture<PocI18nComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocI18nComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

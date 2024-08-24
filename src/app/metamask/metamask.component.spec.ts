import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetamaskComponent } from './metamask.component';

describe('MetamaskComponent', () => {
  let component: MetamaskComponent;
  let fixture: ComponentFixture<MetamaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetamaskComponent]
    });
    fixture = TestBed.createComponent(MetamaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

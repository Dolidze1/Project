import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinaAboutComponent } from './china-about.component';

describe('ChinaAboutComponent', () => {
  let component: ChinaAboutComponent;
  let fixture: ComponentFixture<ChinaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinaAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

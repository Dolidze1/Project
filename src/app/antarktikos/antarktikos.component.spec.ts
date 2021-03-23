import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntarktikosComponent } from './antarktikos.component';

describe('AntarktikosComponent', () => {
  let component: AntarktikosComponent;
  let fixture: ComponentFixture<AntarktikosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntarktikosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntarktikosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

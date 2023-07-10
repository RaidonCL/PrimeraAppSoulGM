import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NintendoPage } from './nintendo.page';

describe('NintendoPage', () => {
  let component: NintendoPage;
  let fixture: ComponentFixture<NintendoPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(NintendoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

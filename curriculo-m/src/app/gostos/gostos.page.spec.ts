import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GostosPage } from './gostos.page';

describe('GostosPage', () => {
  let component: GostosPage;
  let fixture: ComponentFixture<GostosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GostosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

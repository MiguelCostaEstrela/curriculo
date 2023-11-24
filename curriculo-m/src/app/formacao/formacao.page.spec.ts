import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormacaoPage } from './formacao.page';

describe('FormacaoPage', () => {
  let component: FormacaoPage;
  let fixture: ComponentFixture<FormacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

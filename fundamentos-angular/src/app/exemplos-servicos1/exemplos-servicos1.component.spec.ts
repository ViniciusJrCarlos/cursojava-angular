import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplosServicos1Component } from './exemplos-servicos1.component';

describe('ExemplosServicos1Component', () => {
  let component: ExemplosServicos1Component;
  let fixture: ComponentFixture<ExemplosServicos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplosServicos1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemplosServicos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCltFrsComponent } from './nouveau-clt-frs.component';

describe('NouveauCltFrsComponent', () => {
  let component: NouveauCltFrsComponent;
  let fixture: ComponentFixture<NouveauCltFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauCltFrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvtStkComponent } from './detail-mvt-stk.component';

describe('DetailMvtStkComponent', () => {
  let component: DetailMvtStkComponent;
  let fixture: ComponentFixture<DetailMvtStkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMvtStkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMvtStkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

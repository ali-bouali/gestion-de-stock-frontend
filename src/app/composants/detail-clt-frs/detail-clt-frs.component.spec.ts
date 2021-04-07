import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCltFrsComponent } from './detail-clt-frs.component';

describe('DetailCltFrsComponent', () => {
  let component: DetailCltFrsComponent;
  let fixture: ComponentFixture<DetailCltFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCltFrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

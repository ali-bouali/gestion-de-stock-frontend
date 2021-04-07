import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCmdComponent } from './detail-cmd.component';

describe('DetailCmdComponent', () => {
  let component: DetailCmdComponent;
  let fixture: ComponentFixture<DetailCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

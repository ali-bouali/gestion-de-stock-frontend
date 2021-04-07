import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMvtstkComponent } from './page-mvtstk.component';

describe('PageMvtstkComponent', () => {
  let component: PageMvtstkComponent;
  let fixture: ComponentFixture<PageMvtstkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMvtstkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMvtstkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

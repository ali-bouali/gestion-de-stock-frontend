import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatistiquesComponent } from './page-statistiques.component';

describe('PageStatistiquesComponent', () => {
  let component: PageStatistiquesComponent;
  let fixture: ComponentFixture<PageStatistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStatistiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStatistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

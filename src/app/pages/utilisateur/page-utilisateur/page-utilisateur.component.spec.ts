import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUtilisateurComponent } from './page-utilisateur.component';

describe('PageUtilisateurComponent', () => {
  let component: PageUtilisateurComponent;
  let fixture: ComponentFixture<PageUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUtilisateurComponent } from './detail-utilisateur.component';

describe('DetailUtilisateurComponent', () => {
  let component: DetailUtilisateurComponent;
  let fixture: ComponentFixture<DetailUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

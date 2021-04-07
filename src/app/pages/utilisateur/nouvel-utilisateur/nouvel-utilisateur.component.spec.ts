import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelUtilisateurComponent } from './nouvel-utilisateur.component';

describe('NouvelUtilisateurComponent', () => {
  let component: NouvelUtilisateurComponent;
  let fixture: ComponentFixture<NouvelUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

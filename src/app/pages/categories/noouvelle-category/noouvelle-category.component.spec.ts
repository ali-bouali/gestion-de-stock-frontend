import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoouvelleCategoryComponent } from './noouvelle-category.component';

describe('NoouvelleCategoryComponent', () => {
  let component: NoouvelleCategoryComponent;
  let fixture: ComponentFixture<NoouvelleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoouvelleCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoouvelleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

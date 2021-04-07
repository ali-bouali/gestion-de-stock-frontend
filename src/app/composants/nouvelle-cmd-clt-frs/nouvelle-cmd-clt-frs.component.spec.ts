import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCmdCltFrsComponent } from './nouvelle-cmd-clt-frs.component';

describe('NouvelleCmdCltFrsComponent', () => {
  let component: NouvelleCmdCltFrsComponent;
  let fixture: ComponentFixture<NouvelleCmdCltFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleCmdCltFrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleCmdCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

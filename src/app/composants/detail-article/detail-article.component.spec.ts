import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArticleComponent } from './detail-article.component';

describe('DetailArticleComponent', () => {
  let component: DetailArticleComponent;
  let fixture: ComponentFixture<DetailArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ArticleDto} from '../../../../gs-api/src/models/article-dto';
import {ArticleService} from '../../../services/article/article.service';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent implements OnInit {

  listArticle: Array<ArticleDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.findListArticle();
  }

  findListArticle(): void {
    this.articleService.findAllArticles()
    .subscribe(articles => {
      this.listArticle = articles;
    });
  }

  nouvelArticle(): void {
    this.router.navigate(['nouvelarticle']);
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findListArticle();
    } else {
      this.errorMsg = event;
    }
  }
}

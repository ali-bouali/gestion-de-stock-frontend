import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryDto} from '../../../../gs-api/src/models/category-dto';
import {CategoryService} from '../../../services/category/category.service';

@Component({
  selector: 'app-noouvelle-category',
  templateUrl: './noouvelle-category.component.html',
  styleUrls: ['./noouvelle-category.component.scss']
})
export class NoouvelleCategoryComponent implements OnInit {

  categoryDto: CategoryDto = {};
  errorMsg: Array<string> = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    const idCategory = this.activatedRoute.snapshot.params.idCategory;
    if (idCategory) {
      this.categoryService.findById(idCategory)
      .subscribe(cat => {
        this.categoryDto = cat;
      });
    }
  }

  cancel(): void {
    this.router.navigate(['categories']);
  }

  enregistrerCategory(): void {
    this.categoryService.enregistrerCategory(this.categoryDto)
    .subscribe(res => {
      this.router.navigate(['categories']);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }
}

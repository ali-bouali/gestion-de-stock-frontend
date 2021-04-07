import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-noouvelle-category',
  templateUrl: './noouvelle-category.component.html',
  styleUrls: ['./noouvelle-category.component.scss']
})
export class NoouvelleCategoryComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['categories']);
  }
}

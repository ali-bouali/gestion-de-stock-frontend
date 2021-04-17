import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoaderService} from './service/loader.service';
import {Subscription} from 'rxjs';
import {LoaderState} from './loader.model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  show = false;
  subscription: Subscription | undefined;

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
      this.show = state.show;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}

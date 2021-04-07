import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent implements OnInit {

  @Input()
  isNouveauVisible = true;
  @Input()
  isExporterVisible = true;
  @Input()
  isImporterVisible = true;

  @Output()
  clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }


  // private static void rangeCheck(int arrayLen, int fromIndex, int toIndex) {
  //   if (fromIndex > toIndex)
  //     throw new IllegalArgumentException("fromIndex(" + fromIndex +") > toIndex(" + toIndex+")");
  //   if (fromIndex < 0)
  //     throw new ArrayIndexOutOfBoundsException(fromIndex);
  //   if (toIndex > arrayLen)
  //     throw new ArrayIndexOutOfBoundsException(toIndex);
  // }

}

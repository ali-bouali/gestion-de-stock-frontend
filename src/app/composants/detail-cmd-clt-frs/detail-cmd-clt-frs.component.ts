import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-cmd-clt-frs',
  templateUrl: './detail-cmd-clt-frs.component.html',
  styleUrls: ['./detail-cmd-clt-frs.component.scss']
})
export class DetailCmdCltFrsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  modifierClick(): void {
    console.log('click modifier here');
  }
}

import { Component, OnInit } from '@angular/core';
import { computeSearch } from 'src/app/utils/functions/graph-search.js';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    computeSearch()
  }

}

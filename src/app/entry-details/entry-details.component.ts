import { Component, OnInit,Input  } from '@angular/core';
import { entry } from '../entry';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {

  @Input() entry: entry;
  constructor() { }

  ngOnInit(): void {
  }

}

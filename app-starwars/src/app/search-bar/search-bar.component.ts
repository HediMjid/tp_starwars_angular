import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  selectNewItem(value: string) {
    this.newItemEvent.emit(value);
    //console.log(value);
  }

  ngOnInit(): void {
  }

}

import { Component, Input } from '@angular/core';


@Component({
  selector: 'ui-searchbar--1',
  templateUrl: './searchbar--1.component.html',
  styleUrls: ['./searchbar--1.component.scss']
})
export class SearchBar1Component {

  @Input() text: string;
  @Input() active: boolean;

}

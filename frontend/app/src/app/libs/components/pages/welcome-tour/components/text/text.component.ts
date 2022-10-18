import { Component, Input } from '@angular/core';


@Component({
  selector: 'text-component',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  @Input() title: string;
  @Input() text: string;
}

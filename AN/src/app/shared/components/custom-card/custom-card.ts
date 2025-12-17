import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  imports: [],
  templateUrl: './custom-card.html',
  styleUrl: './custom-card.scss',
})
export class CustomCard {
  @Input()
  url!:string;

  @Input()
  title!:string;

  @Input()
  text!:string;
}
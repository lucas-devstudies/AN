import { Component, Input } from '@angular/core';
import { School } from '../../models/school';

@Component({
  selector: 'app-infinite-slider',
  imports: [],
  templateUrl: './infinite-slider.html',
  styleUrl: './infinite-slider.scss',
})
export class InfiniteSlider {
  @Input()
  items: any[] = [];
}
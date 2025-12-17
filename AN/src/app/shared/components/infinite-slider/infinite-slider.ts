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

  ngOnChanges() {
    if (this.items && this.items.length > 0) {
      this.items = this.normalize(this.items);
    }
  }

  normalize(list: School[]): School[] {
    if (!list || list.length === 0) return [];

    const result = [...list];
    let i = 0;
    const size = 50;

    while (result.length < size) {
      result.push(result[i % list.length]);
      i++;
    }

    return result.slice(0, size);
  }
}
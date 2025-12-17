import { NgClass } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-button',
  imports: [FormsModule, NgClass],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.scss',
})
export class CustomButton {

  @Input()
  variant:'primary' | 'primary-outline' = 'primary';

  @Input()
  text!:string;
}

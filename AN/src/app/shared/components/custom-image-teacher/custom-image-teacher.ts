import { Component, Input } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-image-teacher',
  imports: [CommonModule,FormsModule],
  templateUrl: './custom-image-teacher.html',
  styleUrl: './custom-image-teacher.scss',
})
export class CustomImageTeacher {

  @Input()
  teacher!:Teacher;
}

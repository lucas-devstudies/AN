import { Injectable } from '@angular/core';
import { Teacher } from '../../shared/models/teacher';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private teachers:Teacher[] = [];
  
    constructor(){
      this.teachers = 
        [
          { name: 'Prof. Roberto', image: 'assets/teachers/default.png',about:'Mestre em Matemática' },
          { name: 'Prof. Roberto', image: 'assets/teachers/default.png',about:'Mestre em Matemática' },
          { name: 'Prof. Roberto', image: 'assets/teachers/default.png',about:'Mestre em Matemática' },
          { name: 'Prof. Roberto', image: 'assets/teachers/default.png',about:'Mestre em Matemática' },
          { name: 'Prof. Roberto', image: 'assets/teachers/default.png',about:'Mestre em Matemática' },
        ];
      }
  
    getTeachers():Teacher[]{
      return this.teachers;
    }
  }
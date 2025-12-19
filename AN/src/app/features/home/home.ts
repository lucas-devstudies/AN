import { Component, OnInit } from '@angular/core';
import { Footer } from "../../core/components/footer/footer";
import { Nav } from "../../core/components/nav/nav";
import { SchoolService } from '../../core/services/school-service';
import { School } from '../../shared/models/school';
import { CustomButton } from "../../shared/components/custom-button/custom-button";
import { CustomCard } from "../../shared/components/custom-card/custom-card";
import { InfiniteSlider } from "../../shared/components/infinite-slider/infinite-slider";
import { Teacher } from '../../shared/models/teacher';
import { TeacherService } from '../../core/services/teacher-service';
import { CustomImageTeacher } from "../../shared/components/custom-image-teacher/custom-image-teacher";

@Component({
  selector: 'app-home',
  imports: [Footer, Nav, CustomButton, CustomCard, InfiniteSlider, CustomImageTeacher],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  
  lista:School[] = [];
  teachers: Teacher[] = [];

  constructor(
    private schoolService:SchoolService,
    private teacherService:TeacherService
  ){ }

  ngOnInit(): void {
    this.load();
    console.log('Lista carregada:', this.lista);
  }
  load(){
    this.lista = this.schoolService.getSchools();
    this.teachers = this.teacherService.getTeachers();
  }
}

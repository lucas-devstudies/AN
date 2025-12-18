import { Component, OnInit } from '@angular/core';
import { Footer } from "../../core/components/footer/footer";
import { Nav } from "../../core/components/nav/nav";
import { SchoolService } from '../../core/services/school-service';
import { School } from '../../shared/models/school';
import { CustomButton } from "../../shared/components/custom-button/custom-button";
import { CustomCard } from "../../shared/components/custom-card/custom-card";
import { InfiniteSlider } from "../../shared/components/infinite-slider/infinite-slider";

@Component({
  selector: 'app-home',
  imports: [Footer, Nav, CustomButton, CustomCard, InfiniteSlider],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  
  lista:School[] = [];

  constructor(private schoolService:SchoolService){ }

  ngOnInit(): void {
    this.load();
    console.log('Lista carregada:', this.lista);
  }
  load(){
    this.lista = this.schoolService.getSchools();
  }
}

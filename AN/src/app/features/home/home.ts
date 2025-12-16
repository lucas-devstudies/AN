import { Component } from '@angular/core';
import { Footer } from "../../core/components/footer/footer";
import { Nav } from "../../core/components/nav/nav";

@Component({
  selector: 'app-home',
  imports: [Footer, Nav],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}

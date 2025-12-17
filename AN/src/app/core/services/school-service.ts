import { Injectable } from '@angular/core';
import { School } from '../../shared/models/school';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  private lista:School[] = [];

  constructor(){
    this.lista= [
      { name: 'UFAM', image: 'assets/schools/ufam.png' },
      { name: 'UEA', image: 'assets/schools/uea.png' },
      { name: 'IFAM', image: 'assets/schools/ifam.png' },
      { name: 'PUC-PR', image: 'assets/schools/puc-pr.png' },
      { name: 'UNICAMP', image: 'assets/schools/unicamp.png' },
      { name: 'USP', image: 'assets/schools/usp.png' },
      { name: 'UFRJ', image: 'assets/schools/ufrj.png' },
      { name: 'UFC', image: 'assets/schools/ufc.png' },
      { name: 'UFPA', image: 'assets/schools/ufpa.png' },
      { name: 'UFRPE', image: 'assets/schools/ufrpe.png' },
      { name: 'UNAMA', image: 'assets/schools/unama.png' },
      { name: 'UESC', image: 'assets/schools/uesc.png' },
      { name: 'UNIMETROCAMP', image: 'assets/schools/unimetrocamp.png' },
      { name: 'UDESC', image: 'assets/schools/udesc.png' },
      { name: 'PUC-MG', image: 'assets/schools/puc-mg.png' },
      { name: 'FURG', image: 'assets/schools/furg.png' },
      { name: 'UFF', image: 'assets/schools/uff.png' },
      { name: 'UNIFESSPA', image: 'assets/schools/unifesspa.png' },
    ];
  }

  getSchools():School[]{
    return this.lista;
  }
}

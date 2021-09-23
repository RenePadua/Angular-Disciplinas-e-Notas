import { Injectable } from '@angular/core';

interface Disciplinas {
  nome: string;
  horario: string;
  dia: string;
  p1: number;
  p2: number;
}
  
@Injectable()
export class DisciplinasService {
  disciplinas: Array<Disciplinas> = [];

  constructor()
  { 
     if (localStorage.getItem('disciplinas')) {
      this.disciplinas = JSON.parse(localStorage.getItem('disciplinas'));
    } else {
      localStorage.setItem('disciplinas', JSON.stringify([]));
    }
    
  }

  adicionarDisciplina(nome: string, horario: string, dia: string) {
    if (nome != '' && horario != '' && dia != '') {
      this.disciplinas.push({
        nome,
        horario,
        dia,
        p1: 0.0,
        p2: 0.0,
      });
      
      /*
      console.log(this.disciplinas);
*/
      localStorage.setItem('disciplinas', JSON.stringify(this.disciplinas));
    }
  }

  getDisciplinas() {
    
    if (this.disciplinas != null) {
      this.disciplinas = JSON.parse(localStorage.getItem('disciplinas'));
    }
    return this.disciplinas;
  }
  

  atualizarNota1(index: number, p1: string) {
    this.disciplinas[index].p1 = parseFloat(p1);
    localStorage.setItem('disciplinas', JSON.stringify(this.disciplinas));
  }
  atualizarNota2(index: number, p2: string) {
    this.disciplinas[index].p2 = parseFloat(p2);
    localStorage.setItem('disciplinas', JSON.stringify(this.disciplinas));
  }

  getMedia(index: number) {
    return (this.disciplinas[index].p1 + this.disciplinas[index].p2) / 2;
  }
}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primeiro-componente',
  imports: [FormsModule],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent {
  
  nomeinput: string = "";
  nomep: string = "";
  cor: boolean = false;
  
  requestValue(){
    this.nomep = this.nomeinput;
  }

  mostrarTexto() {
    this.nomep = this.nomeinput;
  }

  mudarCor() {
    this.cor = !this.cor;
  }

}

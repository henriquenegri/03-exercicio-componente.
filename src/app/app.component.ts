import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponenteComponent } from "./primeiro-componente/primeiro-componente.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [PrimeiroComponenteComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '03-exercicio-componente';
}

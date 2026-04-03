import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PesquisaComponent } from './components/pesquisa/pesquisa';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PesquisaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pesquisa-frutas');
}

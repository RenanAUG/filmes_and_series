import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BuscaFilmesSeriesComponent} from './components/busca-filmes-series/busca-filmes-series.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuscaFilmesSeriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'filmes_and_series';
}

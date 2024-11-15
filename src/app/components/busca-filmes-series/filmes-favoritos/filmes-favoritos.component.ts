import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {FilmesSeriesModel} from '../filmes-series.model';

@Component({
  selector: 'app-filmes-favoritos',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './filmes-favoritos.component.html',
  styleUrl: './filmes-favoritos.component.css'
})
export class FilmesFavoritosComponent {
  @Input() filmesFavoritos: FilmesSeriesModel[] = [];
}

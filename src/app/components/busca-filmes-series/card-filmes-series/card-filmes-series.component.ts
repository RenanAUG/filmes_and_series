import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FilmesSeriesModel} from '../filmes-series.model';

@Component({
  selector: 'app-card-filmes-series',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './card-filmes-series.component.html',
  styleUrl: './card-filmes-series.component.css'
})
export class CardFilmesSeriesComponent {

  @Input() resultados: FilmesSeriesModel[] = [];

  favoritar(filme: FilmesSeriesModel) {
    let favoritos = this.getFavoritos();
    const index = favoritos.findIndex((f) => f.Title === filme.Title);

    if (index === -1) {
      favoritos.push(filme);
    } else {
      favoritos.splice(index, 1);
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }

  isFavoritado(filme: FilmesSeriesModel): boolean {
    const favoritos = this.getFavoritos();
    return favoritos.some((f) => f.Title === filme.Title);
  }

  getFavoritos(): FilmesSeriesModel[] {
    const favoritos = localStorage.getItem('favoritos');
    return favoritos ? JSON.parse(favoritos) : [];
  }
}

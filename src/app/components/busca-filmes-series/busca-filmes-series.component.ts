import { Component } from '@angular/core';
import { FilmesSeriesService } from './filmes-series.service';
import { FilmesSeriesModel } from './filmes-series.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmesFavoritosComponent } from './filmes-favoritos/filmes-favoritos.component';
import {CardFilmesSeriesComponent} from './card-filmes-series/card-filmes-series.component';

@Component({
  selector: 'app-busca-filmes-series',
  standalone: true,
  imports: [CommonModule, FormsModule, FilmesFavoritosComponent, CardFilmesSeriesComponent],
  templateUrl: './busca-filmes-series.component.html',
  styleUrls: ['./busca-filmes-series.component.css'],
})
export class BuscaFilmesSeriesComponent {
  titulo: string = '';
  resultados: FilmesSeriesModel[] = [];
  filmesFavoritos: FilmesSeriesModel[] = [];
  pesquisaRealizada: boolean = false;
  mensagemErro = false ;

  constructor(private filmeAndSeriesService: FilmesSeriesService) {
  }

  // Método de busca de filmes e séries
  buscarFilmesSeries() {
    if (!this.titulo.trim()) {
      this.resultados = [];
      this.pesquisaRealizada = false;
      return;
    }

    this.filmeAndSeriesService
      .buscaFilmesSeries(this.titulo)
      .pipe()
      .subscribe({
        next: (res) => {
          console.log(res);
          if (res.Response == 'False') {
            this.resultados = [];
            this.mensagemErro = true;
            this.pesquisaRealizada = true;
          } else {
            this.resultados = [res];
            this.mensagemErro = false;
            this.pesquisaRealizada = true;
          }
        },
        error: (err) => {
          console.error('Erro ao buscar filmes:', err);
          this.resultados = [];
          this.mensagemErro = true;
          this.pesquisaRealizada = true;
        },
      });
  }

  mostrarFavoritos() {
    const filmes = localStorage.getItem('favoritos');
    if (filmes) {
      this.filmesFavoritos = JSON.parse(filmes);
    } else {
      this.filmesFavoritos = [];
    }
    this.pesquisaRealizada = false;
  }
}

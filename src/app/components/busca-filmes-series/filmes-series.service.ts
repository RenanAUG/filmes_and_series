import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FilmesSeriesModel} from './filmes-series.model';

@Injectable({
  providedIn: 'root'
})
export class FilmesSeriesService {

  private httpClient = inject(HttpClient)

  buscaFilmesSeries(titulo: string): Observable<FilmesSeriesModel> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get<FilmesSeriesModel>(`/api?t=${titulo}&apikey=1cbc6dc`, { headers });
  }
}

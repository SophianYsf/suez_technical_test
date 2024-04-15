import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-movie-db',
  standalone: true,
  imports: [
    CommonModule,  // import les directives basique d'angular 
    HttpClientModule,  // module pour les requêtes HTTP.
    InfiniteScrollModule  // module ngx-infinite-scroll pour gérer le scroll infini
  ],
  templateUrl: './movie-db.component.html',
  styleUrls: ['./movie-db.component.scss']
})

export class MovieDbComponent implements OnInit {
  movies: any[] = [];  // tableau pour stockage des films
  currentPage = 1;  // page actuel pour pagination

  // injection dans le constructeur pour les requêtes HTTP.
  constructor(private http: HttpClient) {}

  // ngOnInit appelée à l'initialisation du composant.
  ngOnInit() {
    this.loadMovies();  // chargement initial des films
  }

  // chargement des films depuis notre serveur node.js.
  loadMovies() {
    this.http.get<any>(`http://localhost:3000/api/movies?page=${this.currentPage}`)
      .subscribe(data => {
        // concaténation des nouveaux films au tableau + incrémentation page.
        this.movies = [...this.movies, ...data];
        this.currentPage++;
      });
  }

  // déclenchement de l'événement de défilement infini
  onScroll() {
    this.loadMovies();  // charge plus de films lors du défilement.
  }
}

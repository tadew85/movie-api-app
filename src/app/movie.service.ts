import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../app/interface";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  favorites: Movie[] = [];
  private readonly BASE_URL: string = 'https://api.themoviedb.org/3'
  constructor(private http: HttpClient, private router: Router) {}

  search(genre: string = "", rating: number = 0, duration: number = Number.MAX_SAFE_INTEGER): Observable<any>{
    const url = `${this.BASE_URL}/discover/movie`;
    const params = new HttpParams()
      .set("api_key", "db461ada2c7443f6ccd1e6ad86adde8d")
      .set("language", "en-US")
      .set("vote_average.gte", rating.toString())
      .set("with_genres", genre)
      .set("with_runtime.lte", duration.toString());


    return this.http.get(url, { params });
  }
  getById(id: number): Observable<any>{
    const url = `${this.BASE_URL}/movie/${id}`;
    const params = new HttpParams()
      .set("api_key", "db461ada2c7443f6ccd1e6ad86adde8d")
      .set("language", "en-US")
      return this.http.get(url, { params })
  }
  addToWatchlist(){
    
  }
  goToWatchlist(){
    this.router.navigate(["watch-list"]);
  }

  getGenre(genre: string): Observable<any> {
    const url = `${this.BASE_URL}/genre/movie/list`;
    const params = new HttpParams()
      .set("api_key", "db461ada2c7443f6ccd1e6ad86adde8d")
      .set("language", "en-US");

    return this.http.get(url, { params });
  }
}

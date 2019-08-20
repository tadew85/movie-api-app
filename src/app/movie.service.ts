import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

// getMovieData(searchTerm: string): Observable<any>{
//   return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=9c6718c4188fd2951c126ac0fbe2c65f&query=${searchTerm}`)
// }
getGenre(genre: string): Observable<any> {
  return this.http.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=db461ada2c7443f6ccd1e6ad86adde8d&language=en-US`
  );
  console.log(genre);
}
}

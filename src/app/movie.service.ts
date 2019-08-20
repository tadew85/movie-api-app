import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

getMovieData(searchTerm: string): Observable<any>{
  return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=9c6718c4188fd2951c126ac0fbe2c65f&query=${searchTerm}`)
}
getRatingData(searchTerm: string): Observable<any>{
  return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=9c6718c4188fd2951c126ac0fbe2c65f&query=${searchTerm}`)
  
}
getGenreData(searchTerm: string): Observable<any>{
  return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=9c6718c4188fd2951c126ac0fbe2c65f&query=${searchTerm}`)
}
getLengthData(searchTerm: string): Observable<any>{
  return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=9c6718c4188fd2951c126ac0fbe2c65f&query=${searchTerm}`)
}
}

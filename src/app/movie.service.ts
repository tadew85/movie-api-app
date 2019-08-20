

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@NgModule({
  declarations: [
    AppComponent,
    WatchListPageComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class MovieService {

  constructor(private http: HttpClient) { }

getMovieData(searchTerm: string): Observable<any>{
  return this.http.get(`https://api.themoviedb.org/3/movie/550?api_key=db461ada2c7443f6ccd1e6ad86adde8d&q=${searchTerm}&limit=25&offset=0&rating=G&lang=en`)
}

}


import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie.service"
@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
genre: any;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
  getData(genre: string):void{
    this.movieService.getGenre(genre).subscribe(response=>{
        this.genre = response;
        console.log(response.results) 
    });
  }
  toggleMovielist(){

  }

}




import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie.service"
@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
movieData: any;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
  getData(searchTerm: string):void{
    this.movieService.getMovieData(searchTerm).subscribe(response=>{this.movieData = response.data; console.log(this.movieData);
    });
  }

}




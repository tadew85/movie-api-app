import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie.service"
@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {


  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.search("", 9, 90).subscribe(response=>{
      console.log(response);
    })
  }
  getWatchlist(){
    this.movieService.goToWatchlist();
  }
}




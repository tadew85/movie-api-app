import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-watch-list-page',
  templateUrl: './watch-list-page.component.html',
  styleUrls: ['./watch-list-page.component.css']
})
export class WatchListPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
searchReturn(){
  this.router.navigate(["search-criteria"]);
}
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { WatchListPageComponent } from './watch-list-page/watch-list-page.component';
import { FormsModule } from "@angular/forms";
// import { IgxSliderModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './details/details.component';
import { Routes, RouterModule } from "@angular/router";

const approutes: Routes = [
  { path: "watch-list", component: WatchListPageComponent },
  { path: "details", component: DetailsComponent },
  { path: "search-criteria", component: SearchCriteriaComponent },
  { path: "**", redirectTo: "search-criteria" }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    MovieListComponent,
    WatchListPageComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // IgxSliderModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

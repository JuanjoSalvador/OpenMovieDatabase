import {Page, NavController} from 'ionic-angular';
import {Movies} from '../../providers/movies/movies';
import {ResultsPage} from "../results/results";

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [Movies]
})
export class HomePage {
  
  public listOfMovies;
  public title;
    
  constructor(private movies: Movies,
              private nav: NavController) { }
  
  getMovies() {
    this.nav.push(ResultsPage, {title: this.title});
    this.title = "";
  }
}

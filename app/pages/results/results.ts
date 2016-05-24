import {Page, NavController, NavParams} from 'ionic-angular';
import {MovieInfoPage} from '../movie-info/movie-info';
import {Movies} from '../../providers/movies/movies';


/*
  Generated class for the ResultsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/results/results.html',
  providers: [Movies]
})
export class ResultsPage {
  
  public id;
  public listOfMovies;
  public results;
  
  constructor(public nav: NavController, private movie: Movies, private navParams: NavParams) {
    this.movie.getMovies(this.navParams.get('title')).subscribe(
      data => {
        this.listOfMovies = data.json().Search;
        if (this.listOfMovies) {
          this.results = this.listOfMovies.length;
        }
      },
      err => console.log(err)
    );
  }
      
  getMovie(id) {
    this.nav.push(MovieInfoPage, {id: id});
  }
}

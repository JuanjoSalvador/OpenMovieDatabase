import {Page, NavController, NavParams} from 'ionic-angular';
import {Movies} from '../../providers/movies/movies';

@Page({
  templateUrl: 'build/pages/movie-info/movie-info.html',
  providers: [Movies]
})
export class MovieInfoPage {
  public id;
  private movieInfo;
  
  public title;
  public director;
  public actors;
  public country;
  public rating;
  public year;
  public sinopsis;
  public imdb_link;
  
  constructor(private movie: Movies, private navParams: NavParams) {
              
    this.id = navParams.get('id');
        
    this.movie.getMovie(this.id).subscribe(
      data => {
        this.movieInfo = data.json();
        this.title     = this.movieInfo.Title;
        this.year      = this.movieInfo.Year;
        this.actors    = this.movieInfo.Actors;
        this.sinopsis  = this.movieInfo.Plot;
        this.director  = this.movieInfo.Director;
        this.country   = this.movieInfo.Country;
        this.rating    = this.movieInfo.imdbRating;
        
        this.imdb_link = "http://www.imdb.com/title/" + this.id;
        
        //console.log(this.movieInfo);
      },
      err => console.log(err),
      () => console.log("Completado")
    );
          
  }
}

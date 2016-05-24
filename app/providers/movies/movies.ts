import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class Movies {
  
  constructor(public http: Http) {}
  
  getMovies(title) {
    if (title) { // Fixes when there is not title
      var movieList = this.http.get(`http://www.omdbapi.com/?s=${title}`);
    }
    return movieList;
  }
  
  getMovie(id) {
    return this.http.get(`http://www.omdbapi.com/?i=${id}`);
  }
  
}


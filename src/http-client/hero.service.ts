import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {} from 'angular2/http';
import {Hero} from './hero';
import {Observable} from 'rxjs/observable';

@Injectable()
export class HeroService {
  constructor(private http: Http) {
  }

  private _heroesUrl = 'http-client/heroes.json'; // URL to web api

  getHeroes() {
    return this.http.get(this._heroesUrl)
                    .map(res => <Hero[]> res.json().data)
                    .do(data => console.log(data)) // eyeball results in the console
                    .catch(this.handleError);
  }

  addHero(name: string): Observable<Hero> {
    let body = JSON.stringify({ name }); // we may be able to skip this step in the near future
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._heroesUrl, body, options)
                    .map(res => <Hero> res.json().data)
                    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Card} from './cards.model';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
declare var __API_KEY__; // Defined in Webpack config

@Injectable()
export class CardsService {
  constructor(private http: Http) { }

  getCards(collectible: boolean = true) {
    let headers: Headers = new Headers();
    const url =
      `https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=${collectible ? 1 : 0}`;
    headers.append('X-Mashape-Key', __API_KEY__);
    return this.http.get(url, { headers: headers })
      .map((res: Response) => _.flatten(_.values(res.json())));
  }
}

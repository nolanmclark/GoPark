import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Observable, Observer } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {npsKey} from '../../keys/npsKeys';

@Injectable()
export class parkService {
private apiKey = npsKey.apiKey;
private apiUrl = 'https://developer.nps.gov/api/v1/parks?q=';
private images = '&fields=images';
q: any;
data: any = {};

  constructor(public router: Router, private http: Http) {

  }

  search(q) {
    return this.apiUrl + q + '&api_key=' + this.apiKey + this.images;
  }

  getData(url) {
    return this.http.get(url).map((res: Response) => res.json());
  }

  getFeaturedData() {
    let url = 'https://developer.nps.gov/api/v1/parks?q=che&api_key=' + this.apiKey + this.images;
    return this.http.get(url).map((res: Response) => res.json());
  }

  searchByParkCode(code) {
    let url = this.apiUrl + code + '&api_key=' + this.apiKey + this.images;
    return this.http.get(url).map((res: Response) => res.json());
  }
}

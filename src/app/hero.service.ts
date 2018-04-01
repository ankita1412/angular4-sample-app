import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://jsonplaceholder.typicode.com/posts';
  photosUrl = 'https://jsonplaceholder.typicode.com/photos';
  
  getConfig() {
    return this.http.get(this.configUrl);
  }
  getPhotos(){
    return this.http.get(this.photosUrl);
  }

}

import { Component, OnInit } from '@angular/core';
import { HeroService }     from '../hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  
  public photos;

  ngOnInit() {
    console.log("home init called");
    this.heroService.getPhotos()
    .subscribe(data => {
      console.log(data);
      this.photos = data;
    });
  }
}

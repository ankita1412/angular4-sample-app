import { Component, OnInit } from '@angular/core';
import { HeroService }     from '../hero.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public posts;
  public title;

  constructor(private heroService: HeroService) { }
  
  ngOnInit() {
    console.log("init called");
    this.heroService.getConfig()
    .subscribe(data => {
      this.title = "Posts ..."; 
      console.log(data);
      this.posts = data;
    });
  }

}

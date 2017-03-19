import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HackerNewsApiService } from '../hacker-news-api.service';


@Component({
  selector: 'app-hacker-news-page',
  templateUrl: './hacker-news-page.component.html',
  styleUrls: ['./hacker-news-page.component.css']
})
export class HackerNewsPageComponent implements OnInit {
  public items: any;
  constructor(private _hackerNewsAPIService: HackerNewsApiService) {
  }

  ngOnInit() {
    this._hackerNewsAPIService.fetchStories()
          .subscribe(
      items => this.items = items,
      error => console.log('Error fetching stories!'),
      )
    }

}

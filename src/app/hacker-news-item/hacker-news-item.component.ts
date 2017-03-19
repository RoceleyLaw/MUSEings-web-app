import { Component, Input, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { HackerNewsApiService } from '../hacker-news-api.service';

@Component({
  selector: 'app-hacker-news-item',
  templateUrl: './hacker-news-item.component.html',
  providers:[],
  styleUrls: ['./hacker-news-item.component.css']
})
export class HackerNewsItemComponent implements OnInit {
  @Input() item: any;
  @Input() i: number;

  constructor(private _hackerNewsAPIService: HackerNewsApiService) {
    }

  public ngOnInit () {
  }

  public deleteUser(): void {
    this._hackerNewsAPIService.deleteItemById(this.item._id)
      .subscribe((response: Response) => {
               console.log('Item deleted!');
               console.log(this.item);
           },
             (error: Error) => { console.log(error); } ,
             ()=> {
               console.log(this.item._id);
             }
           );
         }

}

import { Component, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HackerNewsApiService } from '../hacker-news-api.service';

@Component({
  selector: 'app-hacker-news-item',
  templateUrl: './hacker-news-item.component.html',
  providers:[],
  styleUrls: ['./hacker-news-item.component.css']
})
export class HackerNewsItemComponent {
  @Input() item: any;
  @Input() i: number;

  constructor(private _hackerNewsAPIService: HackerNewsApiService) {
    }

  public deleteUser(): void {
    this._hackerNewsAPIService.deleteItemById(this.item._id)
      .subscribe((response: Response) => {
               console.log('Item deleted!');
           },
             (error: Error) => { console.log(error); } ,
           );
         }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HackerNewsApiService } from '../hacker-news-api.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  //public lineChartData: Array<any> = new Array<any>();
   public lineChartData: Array<any> = [
     {data: [0.2, 0.5, 0.7, 0.1, 0.3, 0.8, 0.34], label: 'Your Brain Activity'},
   ];
  public lineChartLabels:Array<any> = ['1', '2', '3', '4', '5', '6', '7'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  //data-related
  public items: any;

  constructor(private _hackerNewsAPIService: HackerNewsApiService) { }

  ngOnInit() {
    this._hackerNewsAPIService.fetchStories()
          .subscribe(
      items => this.items = items,
      error => console.log('Error fetching users!'),
      () => {
        console.log(this.items);
        let temp = this.items[15].data;
        let array = temp.split(',').map(Number);
        console.log(array);
        this.lineChartData = [{data:array, label: 'Your Brain Activity'}];
      }
    )
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}

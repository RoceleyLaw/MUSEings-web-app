import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { HackerNewsApiService } from '../hacker-news-api.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

   //public lineChartData: Array<any>;
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
  public array: Array<number>;

  //data-related
  public items: any;
  public sub: any;
  public data: any;

  constructor(private _hackerNewsAPIService: HackerNewsApiService, private route: ActivatedRoute) {
    this.array = new Array<number>();
    //this.lineChartData = new Array<any>();
  }

  ngOnInit() {
    this._hackerNewsAPIService.fetchStories()
          .subscribe(
      items => this.items = items,
      error => console.log('Error fetching users!'),
      () => {
        this.matchData();
        console.log(this.data);
        this.lineChartData = [{ data:this.data, label: 'Your Brain Activity'}];
      }
    )
  }

  public matchData (): void {
    this.sub = this.route.params.subscribe(params => {
      let itemID = +params['id'];
      console.log("this is id" + itemID);
    });
    let url = window.location.href.split('/')[4];
    console.log(url);
    for(let i of this.items) {
      console.log("I DONT GOT YOU" + i.id);
      if(i._id === url){
        console.log("I GOT YOU" + i.id);
        this.array = i.data.split(',').map(Number);
        console.log(this.array);
        this.data = this.array;
      }
    }
    console.log(this.data);
    //this.lineChartData = [{ data: this.data, label: 'Your Brain Activity'}];
  }

  public click(): void {
    //this.lineChartData = [{ data:this.array, label: 'Your Brain Activity'}];
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}

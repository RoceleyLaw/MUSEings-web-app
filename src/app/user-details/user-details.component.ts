import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  // Initialize settings for the chart
  public lineChartData: Array<any> = [
      {data: [], label: ''},
    ];
  public lineChartLabels:Array<any> = ['none'];
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

  //Initialize data-related fields
  public item: any;
  public sub: any;
  public data: any;
  public id: string;

  constructor(private _userService: UserService, private route: ActivatedRoute,
  private router: Router) {
    this.array = new Array<number>();
    this.sub = this.route.params.subscribe(params => {
         this.id = params["id"];},
       error => {console.log(error);});
  }

  ngOnInit() {
    this.getUser();
  }

  private getUser (): void {
    this._userService.fetchItem(this.id)
          .subscribe(
      item => this.item = item,
      error => console.log('Error fetching user item!'),
      () => {
        this.mapData();
        this.lineChartData = [{ data: this.data, label: 'Your Brain Activity'}];
        this.labelData();
      }
    )
  }

  private mapData (): void {
    this.data = this.item.data.split(',').map(Number);
  }

  private labelData (): void {
    if(this.data.length > 0){
    this.lineChartLabels.length = this.data.length; }
    let index = 0;
    for(let dataPt of this.data){
      this.lineChartLabels[index] = String(index);
      index++;
    }
  }
}

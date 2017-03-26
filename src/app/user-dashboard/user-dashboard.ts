import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.html',
  styleUrls: ['./user-dashboard.css']
})
export class UserDashboard implements OnInit {
  public items: any;
  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this._userService.fetchStories()
          .subscribe(
      items => this.items = items,
      error => console.log('Error fetching stories!'),
      )
    }

}

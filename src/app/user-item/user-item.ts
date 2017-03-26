import { Component, Input, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.html',
  providers:[],
  styleUrls: ['./user-item.css']
})
export class UserItem implements OnInit {
  @Input() item: any;
  @Input() i: number;

  constructor(private _userService: UserService) {
    }

  public ngOnInit () {
  }

  public deleteUser(): void {
    this._userService.deleteItemById(this.item._id)
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

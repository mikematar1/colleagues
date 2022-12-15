import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  array :any = [];
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
  }
  listposts(){
    this.http
          .get(
            'http://127.0.0.1:8000/api/getuniposts.php'
          )
          .subscribe((data) => {
            let tmp = JSON.stringify(data);
            let temp = JSON.parse(tmp)['Restaurants'];
            this.array = temp;
            
          });
  }
}

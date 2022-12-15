import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  array :any = [];
  constructor(private router: Router, private http: HttpClient) {}
  ionViewWillEnter(){
    this.http
          .get(
            'http://127.0.0.1:8000/api/getalluniposts.php'
          )
          .subscribe((data) => {
            let info = JSON.stringify(data);
            this.array = JSON.parse(info);
          });
  }
  ngOnInit() {
  }

}

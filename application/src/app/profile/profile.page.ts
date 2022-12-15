import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  array:any =[];
  username:string ="";
  constructor(private router: Router, private http: HttpClient,private storageService: StorageService) {}

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.http
          .get(
            'http://127.0.0.1:8000/api/getuserposts.php'
          )
          .subscribe((data) => {
            let info = JSON.stringify(data);
            this.array = JSON.parse(info);
          });
  this.storageService.get('User').then((User: any) => {
      this.username = User.username;
      let message = document.getElementById('profilename') as HTMLInputElement;
      message.innerHTML=this.username;
  });
  }
}

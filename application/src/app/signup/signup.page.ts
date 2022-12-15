import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  username: string = '';
  email: string = '';
  password: any = '';
  universityid: any= '';
  universities: any = [];
  constructor(private router: Router, private http: HttpClient) {}
  
  ionViewWillEnter() {
    this.http
    .get(
      'http://127.0.0.1:8000/api/getuniversities.php'
    )
    .subscribe((data) => {
      let info = JSON.stringify(data);
      this.universities = JSON.parse(info);
      
    });

  }
  signup() {
    if (
      this.email == '' ||
      this.password == '' ||
      this.username == '' ||
      this.universityid == ''
    ) {
      let message = document.getElementById('emptyfieldsmessage') as HTMLInputElement;
      message.innerHTML = 'Please Fill All Fields';
    } else {
      let postData = new FormData();
      postData.append('email', this.email);
      postData.append('password', this.password);
      postData.append('username', this.username);
      postData.append('universityid', this.universityid);
      
      this.http
        .post('http://127.0.0.1:8000/api/adduser.php', postData)
        .subscribe((data) => {
            this.router.navigate(['/login'])
             });
    }
  }
  handleChange(e: { detail: { value: any; }; }) {
    this.universityid = e.detail.value;
  }
  ngOnInit() {
  }

}

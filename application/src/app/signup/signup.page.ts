import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  first_name: string = '';
  last_name: string = '';
  phone_number: any = '';
  email: string = '';
  password: string = '';
  constructor(private router: Router, private http: HttpClient) {}
  
  ionViewWillEnter() {
    let message = document.getElementById('signupMessage') as HTMLInputElement;
    message.className = 'exist';
    message.innerHTML = '';
  }
  goToHome() {
    if (
      this.email == '' ||
      this.password == '' ||
      this.first_name == '' ||
      this.last_name == '' ||
      this.phone_number == ''
    ) {
      let message = document.getElementById(
        'signupMessage'
      ) as HTMLInputElement;
      message.className = 'empty';
      message.innerHTML = 'Please Fill All Fields';
    } else {
      let postData = new FormData();
      postData.append('first_name', this.first_name);
      postData.append('last_name', this.last_name);
      postData.append('phone_number', this.phone_number);
      postData.append('email', this.email);
      postData.append('password', this.password);
      this.http
        .post('http://127.0.0.1:8000/api/v0.1/users/signup', postData)
        .subscribe((data) => {
          let tmp = JSON.stringify(data);
          if (JSON.parse(tmp)['User'] == 'User Exist') {
            let message = document.getElementById(
              'signupMessage'
            ) as HTMLInputElement;
            message.className = 'exist';
            message.innerHTML = 'User Already Exist';
          } else {
            this.router.navigate(['/tabs'], {
              state: { user: JSON.parse(tmp)['User'] },
            });
          }
        });
    }
  }

  ngOnInit() {
  }

}

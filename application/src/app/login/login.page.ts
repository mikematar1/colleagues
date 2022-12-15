import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  constructor(private router: Router, private http: HttpClient) {}

  authenticate() {
    if (this.email == '' || this.password == '') {
      let message = document.getElementById('notfoundmessage') as HTMLInputElement;
      message.innerHTML = 'Some Fields are missing';
    } else {
      let data = new FormData();
      data.append('email', this.email);
      data.append('password', this.password);
      this.http
        .post('http://127.0.0.1:8000/api/authenticate.php', data)
        .subscribe((data) => {
          let output = JSON.stringify(data);
          if (!JSON.parse(output)['found']) {
            let message = document.getElementById('notfoundmessage') as HTMLInputElement;
            message.innerHTML = 'Incorrect Email or Password';
          } else {
            this.router.navigate(['/tabs'], {
              state: { user: JSON.parse(output)},
            });
          }
        });
    }
  }
  signupRedirect() {
    this.router.navigateByUrl('/signup');
  }

  ngOnInit() {
  }

}

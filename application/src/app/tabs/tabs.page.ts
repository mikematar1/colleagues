import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit() {
    let user = this.router.getCurrentNavigation()?.extras.state;
    let tmp_user = JSON.stringify(user);
    let temp_user = JSON.parse(tmp_user)['user'];
    tmp_user = JSON.stringify(temp_user[0]);
    temp_user = JSON.parse(tmp_user)['id'];
    this.storageService.store('ID', temp_user);
  }
}

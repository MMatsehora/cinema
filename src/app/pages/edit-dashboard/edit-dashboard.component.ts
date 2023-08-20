import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import { userService } from "../../shared/services/user.service";

@Component({
  selector: 'app-edit-dashboard',
  templateUrl: './edit-dashboard.component.html',
  styleUrls: ['./edit-dashboard.component.scss']
})
export class EditDashboardComponent implements OnInit {
  public title: string = `Edit profile`;
  public textBtn: string = 'Edit';
  userId: string | null = '';

  constructor(
    private router: Router,
    private notifier: NotifierService,
    private userService: userService
  ) { }

  ngOnInit(): void {
  }

  editProfile(data: any): void {
    this.userId = localStorage.getItem('user-id');
    this.userService.updateUser(this.userId, data).subscribe(
    () => {
      this.router.navigate(['/dashboard']);
      this.notifier.notify('success', 'Данные успешно обновновились.');
    })
  }
}

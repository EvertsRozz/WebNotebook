import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.css',
    './css/dashboard-box-nav.css',
    './css/dashboard-box-cards.css',
    './css/calendar-box.css'
  ],
})
export class DashboardComponent {
  // temporary folder names while im making the front end.
  // TODO: make backend connection for folders and their names
  folderNames:string[] = ['Math', 'Programming', 'Daily Notes', 'TODO Journal', 'Book Reviews', 'Lorem Ipsum'] 
}

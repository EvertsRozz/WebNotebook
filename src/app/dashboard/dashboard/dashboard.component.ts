import { Component, OnInit } from '@angular/core';
import { FolderDataService } from '../../services/folder-data.service';
import { Folder } from '../../dashboard/Folder.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.css',
    './css/dashboard-box-nav.css',
    './css/dashboard-box-cards.css',
    './css/calendar-box.css',
  ],
})
export class DashboardComponent implements OnInit {
  // Gets data from backend
  folders: Folder[] = [];

  constructor(private folderDataService: FolderDataService) {}

  ngOnInit(): void {
    this.folderDataService.getFolderData().subscribe((folders) => {
      const jsonString = JSON.stringify(folders);
      console.log(jsonString);

      this.folders = folders;
    });
  }

  // folderNames: string[] = ['math', 'english', 'history', 'music', 'sports'];
}

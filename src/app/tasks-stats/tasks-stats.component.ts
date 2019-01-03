import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-stats',
  templateUrl: './tasks-stats.component.html',
  styleUrls: ['./tasks-stats.component.css']
})
export class TasksStatsComponent {
  itemsDone = 0;

  incrementItemsDone() {
    this.itemsDone++;
  }
}

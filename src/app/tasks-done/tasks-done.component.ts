import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-done',
  templateUrl: './tasks-done.component.html',
  styleUrls: ['./tasks-done.component.css']
})
export class TasksDoneComponent {
  itemsDone = new Map<number, string>();
  runningID = 1;

  addToDoItem(event) {
    this.itemsDone.set(this.runningID, event);
    console.log('TasksDoneComponent');
  }
}
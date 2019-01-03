import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo 2019';

  onTransferToDoItem(event) {
    console.log('onTransferToDoItem asdfasdf');
  }
}

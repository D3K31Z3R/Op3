import { Component } from '@angular/core';
import {APIService} from "./api.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NotesApp';
  users = [];
  constructor(apiService : APIService) {
    apiService.getUsers().subscribe((users) => {
      console.log(users)
    })
}

}

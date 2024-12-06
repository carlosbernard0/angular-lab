import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Carlos';
  userData = {
    mail: "teste@gmail.com",
    password: "go123",
    age: 21,
    job: "Developer"
  }

  title = 'moments';
}

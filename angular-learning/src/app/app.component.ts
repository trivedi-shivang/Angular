import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  input = 'angular-learning';
  showSecretPassword = false;
  logButtonClicks = [];

  toggleShowSecretPassword() {
    this.showSecretPassword = !this.showSecretPassword;
    this.logButtonClicks.push(new Date());
  }
}

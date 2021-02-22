import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-router';

  constructor(private router: Router) {
  }

  public handleClick(): void {
    this.router.navigateByUrl('contact');
  }
}

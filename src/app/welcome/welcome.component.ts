import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router: Router) {}
  name = 'Everts';

  nextComponent() {
    const SlidingDiv = document.getElementById('welcome-box');
    SlidingDiv?.classList.add('animate');

    SlidingDiv?.addEventListener('animationend', () => {
      this.router.navigate(['/dashboard']);
    }, {once: true});
  }
}

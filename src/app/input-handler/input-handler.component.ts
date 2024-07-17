import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-handler',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-handler.component.html',
  styleUrls: ['./input-handler.component.css']
})
export class InputHandlerComponent {
  userInput: string = '';
  showVideo: boolean = true;

  constructor(private router: Router) {}

  navigate() {
    if (this.showVideo) {
      this.router.navigate(['/video']);
    } else {
      this.router.navigate(['/player']);
    }
    this.showVideo = !this.showVideo;
  }
}

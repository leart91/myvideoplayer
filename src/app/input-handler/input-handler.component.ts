import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-handler',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input-handler.component.html',
  styleUrls: ['./input-handler.component.css']
})
export class InputHandlerComponent {
  userInput: string = '';
  showVideo: boolean = false;

  constructor(private router: Router) {}

  navigate() {
    console.log(this.showVideo);
    
    if (this.showVideo) {
      this.router.navigate(['/video']);
    } else {
      this.router.navigate(['/player']);
    }
    this.showVideo = !this.showVideo;
  }
}

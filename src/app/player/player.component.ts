import { Component, OnInit } from '@angular/core';
import { VideoserviceService } from '../videoservice.service'; // Adjust the import path as needed
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  videoUrl: string | ArrayBuffer | null = null;

  constructor(private videoserviceService: VideoserviceService) {}

  ngOnInit() {
    this.videoUrl = this.videoserviceService.getVideoUrl();
  }
}

import { Component } from '@angular/core';
import { VideoserviceService } from '../videoservice.service'; // Adjust the import path as needed

@Component({
  selector: 'app-videofiles',
  standalone: true,
  imports: [],
  templateUrl: './videofiles.component.html',
  styleUrls: ['./videofiles.component.css']
})
export class VideofilesComponent {
  constructor(private videoserviceService: VideoserviceService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.videoserviceService.setVideoUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
}

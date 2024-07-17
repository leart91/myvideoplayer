import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoserviceService {
  private videoUrl: string | ArrayBuffer | null = null;

  setVideoUrl(url: string | ArrayBuffer | null) {
    this.videoUrl = url;
  }

  getVideoUrl() {
    return this.videoUrl;
  }
}

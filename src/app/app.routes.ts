import { Routes } from '@angular/router';
import { VideofilesComponent } from './videofiles/videofiles.component';
import { PlayerComponent } from './player/player.component';

export const routes: Routes = [
  { path: 'video', component: VideofilesComponent },
  { path: 'player', component: PlayerComponent },
  // Add more routes as needed
]
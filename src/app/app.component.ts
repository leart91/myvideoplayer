import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerComponent } from "./player/player.component";
import { InputHandlerComponent } from "./input-handler/input-handler.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PlayerComponent, InputHandlerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myvideoplayer';
}

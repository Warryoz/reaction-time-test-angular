import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  startButtonText = 'COMENZAR';
  hasGameStarted = false;
  hasGameFinished = false;
  reactionTime = 0;

  startGame() {
    this.reactionTime = 0;
    this.hasGameFinished = false;
    this.startButtonText = 'PREPARATE';
    setTimeout(() => {
      this.hasGameStarted = true;
      this.reactionTime = new Date().getTime();
    }, Math.floor(Math.random() * 11) * 1000);
  }            

  finishGame() {
    this.reactionTime = new Date().getTime() - this.reactionTime;
    this.startButtonText = 'COMENZAR';
    this.hasGameFinished = true;
    this.hasGameStarted = false;
  }
}

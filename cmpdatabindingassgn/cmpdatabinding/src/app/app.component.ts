import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  evenval:number = 0;
  oddval:number=0;
  onGameStarted(valno:number){
    if(valno%2 == 0)
    this.evenval = valno;
    else
    this.oddval=valno;
  }
  onGameStopped(valno:number){
    // this.evenval = valno;
    // this.oddval = valno;
  }
}


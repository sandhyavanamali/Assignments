import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<number>();
  
  @Output() gameStopped = new EventEmitter<number>();
  incrValue : number = 0;
  startClicked:boolean = false;
   interval:any;
  constructor() {
   
   }
  startGame(){
    this.startClicked = true;
   this.interval =  setInterval(() => {
      this.incrValue ++;
      console.log(this.incrValue);
      this.gameStarted.emit(this.incrValue);
    }, 1000);
  
   
  }
  stopGame(){
    this.startClicked = false;
    clearInterval(this.interval);
    this.gameStopped.emit(this.incrValue);
    }

  ngOnInit() {
  }

}

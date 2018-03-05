import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
styles:[
  `.log{
    color:white;
  }`
]
})
export class AppComponent implements OnInit {
  title = 'app';
  userName:string = '';
  allowedNewUser:boolean=false;
  display:boolean = false;
  logclicks:any = [];
  
  constructor(){
   }
  EnableButton(){
    if(this.userName != ''){
      this.allowedNewUser = true;
    }
  }
  OnReset(){
    this.userName = '';
    this.allowedNewUser = false;
  }
  DisplayDetails(){
this.display = true;
this.logclicks.push({'timeclick':new Date().toString()});
  }
  ngOnInit(){

  }
}

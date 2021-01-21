import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public checkForm:boolean = false;
  public complete:boolean = false;
  public constructor() {}

  public ngOnInit(): void {
  }

  infoFromChild(data:boolean){
    this.checkForm = data;
  }
  regComplete(data:boolean){
    this.complete = data;
  }

}
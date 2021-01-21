import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login-name',
  templateUrl: './login-name.component.html',
  styleUrls: ['./login-name.component.css']
})
export class LoginNameComponent implements OnInit {

public fullNameValid:boolean=false;
public firstNameValid:boolean=false;
public emailSuccess:string="";
public emailError:string="";
public emailValid:boolean=false;
public formValid:boolean=false

@Output() isValid = new EventEmitter<any>();

sendToParent(e:any):void{
  e.preventDefault();
  this.isValid.emit(true);
}

validForm = ():void => {
  if(this.fullNameValid&&this.firstNameValid&&this.emailValid){
    this.formValid=true;
  }else{
    this.formValid=false;
  }  
}
handleFullName = (event:any):void => {
  const inputValue = event.target.value
  if(inputValue){
    this.fullNameValid=true;
  }else{
    this.fullNameValid=false;
  }
  this.validForm();
}
handleFirstName = (event:any):void => {
  const inputValue = event.target.value
  if(inputValue){
    this.firstNameValid=true;
  }else{
    this.firstNameValid=false;
  }
  this.validForm();
}
handleEmail = (event:any):void => {
  const inputValue = event.target.value
  const reg:RegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(reg.test(inputValue)){
    this.emailValid=true;
    this.emailSuccess="";
    this.emailError=""
  }else{
    this.emailValid=false;
    this.emailSuccess="invalid";
    this.emailError="visible"
  }
  this.validForm();
}

  constructor() { }

  ngOnInit(): void {
  }

}

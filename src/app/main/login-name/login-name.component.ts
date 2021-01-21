import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login-name',
  templateUrl: './login-name.component.html',
  styleUrls: ['./login-name.component.css']
})
export class LoginNameComponent implements OnInit {

public fullNameArrow:string="";
public fullNameValid:boolean=false;
public firstNameArrow:string="";
public firstNameValid:boolean=false;
public emailSuccess:string="";
public emailError:string="";
public emailValid:boolean=false;
public formBtn:string="disabled"
public formValid:boolean=false

@Output() isValid = new EventEmitter<any>();

sendToParent(e:any):void{
  e.preventDefault();
  this.isValid.emit(true);
}

validForm = ():void => {
  if(this.fullNameValid&&this.firstNameValid&&this.emailValid){
    this.formBtn=""
    this.formValid=true;
  }else{
    this.formBtn="disabled"
    this.formValid=false;
  }  
}
handleFullName = (event:any):void => {
  const inputValue = event.target.value
  if(inputValue){
    this.fullNameValid=true;
    this.fullNameArrow="visible"
  }else{
    this.fullNameValid=false;
    this.fullNameArrow=""
  }
  this.validForm();
}
handleFirstName = (event:any):void => {
  const inputValue = event.target.value
  if(inputValue){
    this.firstNameValid=true;
    this.firstNameArrow="visible"
  }else{
    this.firstNameValid=false;
    this.firstNameArrow=""
  }
  this.validForm();
}
handleEmail = (event:any):void => {
  const inputValue = event.target.value
  const reg:RegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(reg.test(inputValue)){
    this.emailSuccess="";
    this.emailError="";
    this.emailValid=true;
  }else{
    this.emailSuccess="invalid";
    this.emailError="visible";
    this.emailValid=false;
  }
  this.validForm();
}

  constructor() { }

  ngOnInit(): void {
  }

}

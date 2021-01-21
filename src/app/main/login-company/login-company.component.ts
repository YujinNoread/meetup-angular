import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.css']
})
export class LoginCompanyComponent implements OnInit {

  public companyArrow:string = "";
  public companyError:string = "";
  public companyValid:boolean = false;
  public phoneArrow:string = "";
  public phoneError:string = "";
  public phoneValid:boolean = false;
  public passwordArrow:string = "";
  public passwordError:string = "";
  public passwordValid:boolean = false;
  public checkboxError:string = "";
  public checkboxValid:boolean = false;
  public formBtn:string="disabled";
  public formValid:boolean=false;
  public modal:string="";

  @Output() backBtn = new EventEmitter<any>();

  back(){
    this.backBtn.emit(false);
  }

  @Output() complete = new EventEmitter<any>();

  send(e:any){
    e.preventDefault();
    this.complete.emit(true);
  }


  validForm = ():void => {
    if(this.companyValid&&this.phoneValid&&this.passwordValid&&this.checkboxValid){
      this.formBtn=""
      this.formValid=true;
    }else{
      this.formBtn="disabled"
      this.formValid=false;
    }
  }

  public handleCompany = (event:any):void =>{

    const inputValue = event.target.value

    if(inputValue){
      this.companyArrow="visible";
      this.companyError="";
      this.companyValid=true;
    } else{
      this.companyArrow="";
      this.companyError="invalid";
      this.companyValid=false;
    }

    this.validForm();
  }

  public handlePhone = (event:any):void =>{
    
    const inputValue = event.target.value.replace(/\D+/g, '')

    if(inputValue.length===12){  
      this.phoneArrow="visible";
      this.phoneError="";
      this.phoneValid=true;
    } else{
      this.phoneArrow="";
      this.phoneError="invalid";
      this.phoneValid=false;
    }

    this.validForm();
  }

  public handlePassword = (event:any):void =>{

    const inputValue = event.target.value

    if(inputValue){
      this.passwordArrow="visible";
      this.passwordError="";
      this.passwordValid=true;
    } else{
      this.passwordArrow="";
      this.passwordError="invalid";
      this.passwordValid=false;
    }

    this.validForm();
  }

  public handleCheckbox = (event:any):void =>{

    const checked = event.currentTarget.checked

    if(checked){
      this.checkboxError="";
      this.checkboxValid=true;
    } else{
      this.checkboxError="visible";
      this.checkboxValid=false;
    }

    this.validForm();
  }

  constructor() { }

  ngOnInit(): void {
  }

  showModal(){
    let checkbox = <HTMLInputElement>document.getElementById("checkbox");

    this.modal = "visible"
    checkbox.checked = false;
  }
  closeModal(){
    this.modal = ""
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  
  constructor() { }

  private username:string=window.localStorage.getItem('Username')||"User not logged in";
  private employee_id:number;
  private role:string;

  private loggedIn=JSON.parse(window.localStorage.getItem('loginstatus')) ||false; 

  getloginState(){
    return JSON.parse(window.localStorage.getItem('loginstatus')) || this.loggedIn;
  }

  getUsername(){
    return window.localStorage.getItem('Username');
  }

  getRole(){
    return window.localStorage.getItem('Role');
  }

  getEmployee_ID(){
    return window.localStorage.getItem('Employee_ID');
  }

  setSession(uname,empcode,role){
    this.username=uname;
    this.employee_id=empcode;
    console.log("Uname: "+ uname+ " EmpID: "+empcode+ "Role:" +role)
    this.role=role;
    window.localStorage.setItem('Role',this.role.toString());
    window.localStorage.setItem('Username',this.username.toString());
    window.localStorage.setItem('Employee_ID',this.employee_id.toString()); 
    window.localStorage.setItem('loginstatus',true.toString());
  }

  unsetSession(){
    window.localStorage.removeItem('Username');
    window.localStorage.removeItem('Employee_ID');
    window.localStorage.removeItem('Role');
    window.localStorage.setItem('loginstatus',false.toString());
  }

}

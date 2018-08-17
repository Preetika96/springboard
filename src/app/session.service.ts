import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  username:string=localStorage.getItem('Username')||"User not logged in";
  employee_id:number;

  private loggedIn=JSON.parse(localStorage.getItem('loginstatus')) ||false; 

  constructor() { }

  setloginState(state:boolean){
    this.loggedIn=state;
    localStorage.setItem('loginstatus',state.toString());
  }

  setSession_var(username,employee_id){
    this.employee_id=+employee_id;
    this.username=username;
    localStorage.setItem('Username',username);
    localStorage.setItem('Employee_id',this.employee_id.toString());
  }
  
  getloginState(){
    if(!this.loggedIn){
      localStorage.removeItem('Username');
      localStorage.removeItem('Employee_id');
    }
    return JSON.parse(localStorage.getItem('loginstatus')) || this.loggedIn;
  }

  removeSession_var(){
    localStorage.removeItem('Username');
      localStorage.removeItem('Employee_id');
  }
}

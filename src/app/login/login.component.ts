import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  contactEmail:string= '';
  contactPassword:string=''
  showError:boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

   sendContact(){

  
    
     if (this.contactEmail == "") {
      this.showError = true;
      

    }
    
   else  if (this.contactPassword == "") {
      this.showError = true;
      

    }


    else if (this.contactEmail.indexOf("@") == -1 || this.contactEmail.indexOf('.') == -1) {
      this.showError = true;
      

    }

    else {
      this.showError = false;
     
      
    }

  }
  
   }


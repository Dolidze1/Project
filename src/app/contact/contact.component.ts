import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup, MinLengthValidator, ReactiveFormsModule} from "@angular/forms"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
  showError:boolean = false;
  
  showError2 : boolean = false;
  contactName : string = ''
  contactLastName : string = ''
  contactEmail : string = ''
  contactCountry : string = ''
  


 
  variety: string[] = ["Georgia, ", 'Spain', 'Italy', 'United Kingdom' , 'Greec','Japan'];

  contactForm= new FormGroup({
            
    nameControl:  new FormControl(''),
    lastNameControl:  new FormControl(''),
    varietyControl: new FormControl(''),
    emailControl:new FormControl(''),
    
   
  });

  constructor() { }

  ngOnInit(): void {
  }

  
  sendContact()
  {
    
    
    var formValues = this.contactForm.value
    var name  = formValues.nameControl;
    var lastname = formValues.lastNameControl;
    var email = formValues.emailControl;
    var variety = formValues.varietyControl;
    
    
    if (this.contactName == "") {


      this.showError = true;


    }
    else if (this.contactLastName == "") {
      this.showError = true;
      

    }
    else if (this.contactEmail == "") {
      this.showError = true;
      

    }
    
    

    

    else if (this.contactCountry == '') {
      this.showError = true;
     

    }
    else if (this.contactName.trim().toLowerCase() == this.contactLastName.trim().toLowerCase()) {
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

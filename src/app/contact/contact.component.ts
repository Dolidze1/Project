import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup, MinLengthValidator, ReactiveFormsModule} from "@angular/forms"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
  showError:boolean = false;
  errorText: string = '';
  showError2 : boolean = false;
 
  variety: string[] = ["ხილი, ", 'ბოსტნეული', 'სურსათი', 'სასმელი' , 'კანცელარია','ქიმია'];

  contactForm= new FormGroup({
            
    nameControl:  new FormControl(''),
    lastNameControl:  new FormControl(''),
    varietyControl: new FormControl(''),
    emailControl:new FormControl(''),
    
   
  });

  constructor() { }

  ngOnInit(): void {
  }

  sendContact(){

  }

}

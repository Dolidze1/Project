import { Component, OnInit , } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {





  isLinear = false;

  
    firstFormGroup= new FormGroup({

      firstCtrl:  new FormControl(''),
      lastNameControl:  new FormControl(''),

    })
    secondFormGroup= new FormGroup({

    })
    thirdFromGroup= new FormGroup({

    })
   

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFromGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
}
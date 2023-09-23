import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import {FormControl, FormGroup} from '@angular/forms';
import { Validators} from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})

export class WelcomeComponent {
  name = ""
  title = new AppComponent().title;
  data = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  constructor(){}

  onStart(){
    this.name = this.data.value.username? this.data.value.username: ""
  }
  
  


}

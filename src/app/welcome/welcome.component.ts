import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldControl,MatFormFieldModule } from '@angular/material/form-field';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: true,
  imports: [FormsModule, MatDividerModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf],
})

export class WelcomeComponent {
  title = new AppComponent().title;
  name = new FormControl('',Validators.required)
  


}

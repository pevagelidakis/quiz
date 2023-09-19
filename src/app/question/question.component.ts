import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  title = new AppComponent().title
  name = new WelcomeComponent().name
}

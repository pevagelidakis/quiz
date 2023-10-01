import { Component,OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{
  title = new AppComponent().title
  name = new WelcomeComponent().data.value.username

  constructor(private questionService: QuestionService){}

  ngOnInit(): void {
    this.getAllQuestions()
  }
  getAllQuestions(){
    this.questionService.getQuestionJson().subscribe(res =>{
      console.log(res);
    })
  }

}

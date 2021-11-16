import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-lesson',
  templateUrl: './new-lesson.component.html',
  styleUrls: ['./new-lesson.component.css']
})
export class NewLessonComponent implements OnInit {
  wordForm: FormGroup;
  wordsLearnt: string[] = [];

  ngOnInit() {
    this.setWordForm();
  }

  get wordFormInput() { return this.wordForm.get('wordFormInput') }
  private setWordForm() {
    this.wordForm = new FormGroup({
      wordFormInput: new FormControl('')
    });
  }

  wordFormSubmit() {
    this.wordsLearnt.push(this.wordFormInput?.value);
  }

}

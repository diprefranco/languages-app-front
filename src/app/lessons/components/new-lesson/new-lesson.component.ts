import { Component, ElementRef, OnInit, AfterViewChecked, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-lesson',
  templateUrl: './new-lesson.component.html',
  styleUrls: ['./new-lesson.component.css']
})
export class NewLessonComponent implements OnInit, AfterViewChecked {
  wordForm: FormGroup;
  wordsLearnt: string[] = [];
  @ViewChild('wordInput') wordInputElement: ElementRef;

  constructor(
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.setWordForm();
  }

  ngAfterViewChecked() {
    this.wordInputElement.nativeElement.focus();
    this.cdRef.detectChanges();
  }

  get wordFormInput() { return this.wordForm.get('wordFormInput') }
  private setWordForm() {
    this.wordForm = new FormGroup({
      wordFormInput: new FormControl('', Validators.required)
    });
  }

  wordFormSubmit() {
    if (!this.wordForm.valid) return;
    this.wordsLearnt.push(`${this.wordFormInput?.value}`.trim());
    this.wordForm.reset();
    this.wordInputElement.nativeElement.focus();
  }
}

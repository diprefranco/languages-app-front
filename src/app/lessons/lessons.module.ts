import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutingModule } from './lessons-routing.module';
import { NewLessonComponent } from './components/new-lesson/new-lesson.component';


@NgModule({
  declarations: [
    NewLessonComponent
  ],
  imports: [
    CommonModule,
    LessonsRoutingModule
  ]
})
export class LessonsModule { }

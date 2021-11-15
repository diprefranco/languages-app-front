import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../constants/app-routes';
import { NewLessonComponent } from './components/new-lesson/new-lesson.component';

const routes: Routes = [
  {
    path: appRoutes.LessonsModule.New,
    component: NewLessonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }

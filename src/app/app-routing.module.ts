import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './constants/app-routes';

const routes: Routes = [
  {
    path: appRoutes.LessonsModule.Base,
    loadChildren: () => import('./lessons/lessons.module').then(x => x.LessonsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

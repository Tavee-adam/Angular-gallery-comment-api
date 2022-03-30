import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { ReviewComponent } from './review/review.component';
import { IndexComponent } from './index/index.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'comments', component: CommentsComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  IndexComponent,
  ReviewComponent,
  CommentsComponent,
  Page404Component,
];

import { NotFoundComponent } from './pages/notfound/notfound.component';
import { ForumDetailComponent } from './pages/forum/forum-detail/forum-detail.component';
import { ForumIndexComponent } from './pages/forum/forum-index/forum-index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'forum',
    component: ForumIndexComponent
  }, {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

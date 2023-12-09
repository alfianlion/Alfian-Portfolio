import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/page/home/home.component';
import { NotFoundComponent } from 'src/page/not-found/not-found.component';
import { WorksComponent } from 'src/page/works/works.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'works', component: WorksComponent },
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

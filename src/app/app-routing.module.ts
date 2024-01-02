import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/page/home/home.component';
import { NotFoundComponent } from 'src/page/not-found/not-found.component';
import { IDPortfolioComponent } from 'src/page/works/idportfolio/idportfolio.component';
import { InterviewsconnectComponent } from 'src/page/works/interviewsconnect/interviewsconnect.component';
import { JigsawmeComponent } from 'src/page/works/jigsawme/jigsawme.component';
import { NpMpComponent } from 'src/page/works/np-mp/np-mp.component';
import { WorksComponent } from 'src/page/works/works.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'works', component: WorksComponent },
  { path: 'works/interviewsconnect', component: InterviewsconnectComponent },
  { path: 'works/jigsawme', component: JigsawmeComponent },
  { path: 'works/idportfolio', component: IDPortfolioComponent },
  { path: 'works/np-mp', component: NpMpComponent },
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

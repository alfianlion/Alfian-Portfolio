import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/page/home/home.component';
import { WorksComponent } from 'src/page/works/works.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { InterviewsconnectComponent } from 'src/page/works/interviewsconnect/interviewsconnect.component';
import { JigsawmeComponent } from 'src/page/works/jigsawme/jigsawme.component';
import { IDPortfolioComponent } from "src/page/works/idportfolio/idportfolio.component";
import { NpMpComponent } from "src/page/works/np-mp/np-mp.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    InterviewsconnectComponent,    
    JigsawmeComponent,
    IDPortfolioComponent,
    NpMpComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

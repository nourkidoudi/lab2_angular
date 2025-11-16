import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthentifComponent } from './authentif/authentif.component';
import { AppareilDashboardComponent } from './appareil-dashboard/appareil-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { AppareilDetailComponent } from './appareil-detail/appareil-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    AppareilComponent,
    AuthentifComponent,
    AppareilDashboardComponent,
    WelcomeComponent,
    ContactComponent,
    AppareilDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }

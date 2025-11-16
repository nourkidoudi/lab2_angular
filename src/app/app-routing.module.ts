import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppareilDashboardComponent } from './appareil-dashboard/appareil-dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { AuthentifComponent } from './authentif/authentif.component';
import { AppareilDetailComponent } from './appareil-detail/appareil-detail.component';

const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'appareils', component: AppareilDashboardComponent },
  { path: 'appareils/:id', component: AppareilDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: AuthentifComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

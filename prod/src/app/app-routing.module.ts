import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BusinessComponent} from './business/business.component';
import {ContactsComponent} from './contacts/contacts.component';
import {DevelopmentComponent} from './development/development.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {HomeComponent} from './home/home.component';
import {LicenseComponent} from './license/license.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RoadmapComponent} from './roadmap/roadmap.component';
import {ServicesComponent} from './services/services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'development', component: DevelopmentComponent },
  { path: 'roadmap', component: RoadmapComponent},
  { path: 'contacts', component: ContactsComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'business', component: BusinessComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

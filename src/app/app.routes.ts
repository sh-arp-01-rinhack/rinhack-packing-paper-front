import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { AboutComponent } from './pages/about/about.component';
import { AleopComponent } from './core/aleop/aleop.component';

export const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'error', component: ErrorPageComponent },
    { path: 'aleop', component: AleopComponent },

    { path: '**', redirectTo: 'error' }
];

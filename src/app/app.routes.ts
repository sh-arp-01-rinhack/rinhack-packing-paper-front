import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'error', component: ErrorPageComponent },

    { path: '**', redirectTo: 'error' }
];

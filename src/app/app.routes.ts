import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent },
    { path: 'error', component: ErrorPageComponent },

    { path: '**', redirectTo: 'error' }
];

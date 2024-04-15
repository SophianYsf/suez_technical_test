import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JycComponent } from './pages/jyc/jyc.component';
import { VmsComponent } from './pages/vms/vms.component';
import { MovieDbComponent } from './pages/movie-db/movie-db.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'jyc', component: JycComponent},
    { path: 'vms', component: VmsComponent},
    { path: 'movie', component: MovieDbComponent}
];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { AnaliseAtivoComponent } from './pages/ativo/ativo.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'details',
        component: DetalhesComponent
    },
    {
        path: 'analysis/:ativo',
        component: AnaliseAtivoComponent
    },
    {
        path: 'calendar',
        component: CalendarioComponent
    }
];

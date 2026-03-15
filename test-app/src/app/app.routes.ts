import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home' as const,
    },
    {
        path: 'items',
        component: ListComponent,
        title: 'List of Items' as const,
    },
    {
        path: '**',
        redirectTo: ''
    }
];

import { Routes } from '@angular/router';
import { HomePage } from './home/home';
import { ItemsPage } from './list/list';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        title: 'Home Page',
    },
    {
        path: 'items',
        component: ItemsPage,
        title: 'List of Items',
    }
];

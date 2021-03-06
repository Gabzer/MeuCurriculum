import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ContatoComponent } from './contato/contato.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'curriculum', component: CurriculumComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
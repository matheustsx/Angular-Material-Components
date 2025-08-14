import { Routes } from '@angular/router';
import { Input } from './components/input/input';

export const routes: Routes = [
    {path: '', redirectTo: 'input', pathMatch: 'full'},
    {path: 'input', component: Input, pathMatch: 'full'},

];

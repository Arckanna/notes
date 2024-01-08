import { Routes } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { AddNoteComponent } from './components/add-note/add-note.component';

export const routes: Routes = [
   
    {
        path: '',
        component: NotesListComponent,
    },
    {
        path:'new',
        component: AddNoteComponent
    },
    {
        path: '**',
        redirectTo: 'notes',
    },
];

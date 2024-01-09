import { Routes } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';

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
        path:'note/:id',
        component: NoteDetailComponent
    },
    {
        path: '**',
        redirectTo: 'notes',
    },
];

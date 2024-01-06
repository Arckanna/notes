import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { NotesListComponent } from "./components/notes-list/notes-list.component";
import { AddNoteComponent } from "./components/add-note/add-note.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, NotesListComponent, AddNoteComponent]
})
export class AppComponent {
  title = 'photoEditor';
}

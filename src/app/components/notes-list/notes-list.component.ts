import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NOTES } from '../../../notes';
import { AlertController } from '@ionic/angular'; // Import the AlertController

@Component({
  selector: 'app-notes-list',
  standalone: true,
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss',
  imports: [RouterModule],
})
export class NotesListComponent {
  notes = NOTES;
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NOTES } from '../../../notes';
import { AlertController } from '@ionic/angular'; // Import the AlertController

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent {
  notes = NOTES;

  constructor(private alertController: AlertController) {} // Add the constructor

  async show(title: string) { // Update the method to be async
    const alert = await this.alertController.create({ // Use the AlertController to create the alert
      header: 'Note Title',
      message: title,
      buttons: ['OK']
    });

    await alert.present(); // Display the alert
  }
}

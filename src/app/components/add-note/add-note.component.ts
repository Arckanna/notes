import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent {
 addNoteForm= new FormGroup({
  title: new FormControl(''),
  text: new FormControl(''),
 });
 addNote() {
  let title = this.addNoteForm.value.title ?? '';
  let text = this.addNoteForm.value.text ?? '';
  console.log(this.addNoteForm.value);
 }
}


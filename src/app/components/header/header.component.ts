import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
   <h1>{{title }}</h1>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = "Mes notes";
}

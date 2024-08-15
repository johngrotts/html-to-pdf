import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HtmlTestComponent } from "./html-to-pdf/test/html-test/html-test.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HtmlTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'html-to-pdf';
}

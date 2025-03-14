import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ImplicitReceiver } from '@angular/compiler';
import { ImprintComponent } from './imprint/imprint.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MainContentComponent,FooterComponent, ImprintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakura';
}

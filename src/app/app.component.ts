import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { PreloaderComponent } from './core/layout/preloader/preloader.component';
import { BackToTopComponent } from './core/layout/back-to-top/back-to-top.component';
import { ScrollProgressComponent } from './core/layout/scroll-progress/scroll-progress.component';
import { WhatsappButtonComponent } from './core/layout/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    PreloaderComponent,
    BackToTopComponent,
    ScrollProgressComponent,
    WhatsappButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="not-found-area">
      <div class="container text-center">
        <h1 class="nf-code">404</h1>
        <h2 class="nf-title">Page Not Found</h2>
        <p class="nf-text">The page you are looking for doesn’t exist or has been moved.</p>
        <a routerLink="/" class="btn alime-btn btn-2 mt-30">Back to Home</a>
      </div>
    </section>
  `,
  styles: [
    `
      .not-found-area {
        padding: 220px 0 140px;
      }
      .nf-code {
        font-size: 120px;
        font-weight: 700;
        line-height: 1;
        color: #fc6060;
        margin-bottom: 10px;
      }
      .nf-title {
        font-size: 28px;
        margin-bottom: 15px;
      }
      .nf-text {
        margin-bottom: 0;
        color: #888;
      }
      @media (max-width: 767px) {
        .not-found-area {
          padding: 160px 0 100px;
        }
        .nf-code {
          font-size: 84px;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}

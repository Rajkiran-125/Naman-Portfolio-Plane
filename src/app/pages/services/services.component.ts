import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServicesComponent } from '../../shared/services/services.component';
import { TestimonialsComponent } from '../../shared/testimonials/testimonials.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { AnimateOnScrollDirective } from '../../shared/animate-on-scroll.directive';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    ServicesComponent,
    TestimonialsComponent,
    CtaBandComponent,
    AnimateOnScrollDirective,
  ],
  template: `
    <section
      class="page-hero"
      [style.--hero-bg]="
        'url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/74a8dd206717261.66d0dba53e875.jpg)'
      "
    >
      <div class="container">
        <p class="eyebrow">What I offer</p>
        <h1 class="page-hero__title">Services</h1>
        <p class="page-hero__sub">
          Photography &amp; film, tailored to people and brands.
        </p>
      </div>
    </section>

    <app-services
      eyebrow="Packages"
      title="Choose your session"
      subtitle="Transparent starting prices — every commission is then tailored to your brief."
    />

    <section class="section section--soft">
      <div class="container">
        <div class="section-head section-head--center" appReveal>
          <p class="eyebrow eyebrow--center">How it works</p>
          <h2>A simple, considered process</h2>
        </div>
        <div class="process__grid">
          @for (step of steps; track step.title; let i = $index) {
            <div class="process__step" appReveal [revealDelay]="i * 90">
              <span class="process__num">{{ i + 1 < 10 ? '0' : '' }}{{ i + 1 }}</span>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <app-testimonials [soft]="false" />

    <app-cta-band
      eyebrow="Availability"
      title="Now booking select projects"
      text="Tell me about your vision and let's check dates."
    />
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .process__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: clamp(2rem, 4vw, 3.4rem);
      }

      .process__step {
        position: relative;
        text-align: center;
        padding-top: 1.6rem;
      }

      /* Thin rule above each step — purely structural, monochrome. */
      .process__step::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 46px;
        height: 1px;
        background: var(--border);
      }

      .process__num {
        display: block;
        font-family: var(--font-serif);
        font-size: clamp(3rem, 6vw, 4.4rem);
        font-weight: 500;
        line-height: 1;
        color: var(--text);
        opacity: 0.18;
        margin-bottom: 0.7rem;
        letter-spacing: -0.01em;
      }

      .process__step h3 {
        font-family: var(--font-head);
        font-size: 1.05rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        margin-bottom: 0.6rem;
      }

      .process__step p {
        color: var(--text-muted);
        font-size: 0.95rem;
        font-weight: 300;
        line-height: 1.75;
        max-width: 26ch;
        margin-inline: auto;
      }

      @media (max-width: 860px) {
        .process__grid {
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesPageComponent {
  readonly steps = [
    { title: 'Enquire', text: 'Share your brief, dates and references. We align on scope and budget.' },
    { title: 'Plan', text: 'Mood-boards, locations and a shot list — every detail considered.' },
    { title: 'Shoot', text: 'A calm, directed session built to get the very best out of the day.' },
    { title: 'Deliver', text: 'Hand-finished edits in a private gallery, ready to share and print.' },
  ];
}

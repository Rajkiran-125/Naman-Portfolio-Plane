import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { ServicesComponent } from '../../shared/services/services.component';
import { TestimonialsComponent } from '../../shared/testimonials/testimonials.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { AnimateOnScrollDirective } from '../../shared/animate-on-scroll.directive';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    ServicesComponent,
    TestimonialsComponent,
    CtaBandComponent,
    AnimateOnScrollDirective,
  ],
  template: `
    <app-breadcrumb
      title="Services"
      crumb="Services"
      subtitle="Photography & film, tailored to people and brands."
      background="https://mir-s3-cdn-cf.behance.net/project_modules/disp/74a8dd206717261.66d0dba53e875.jpg"
    />

    <app-services
      eyebrow="Packages"
      title="Choose your session"
      subtitle="Transparent starting prices — every commission is then tailored to your brief."
    />

    <section class="section section--soft">
      <div class="container process" appReveal>
        <div class="section-head section-head--center">
          <p class="eyebrow eyebrow--center">How it works</p>
          <h2>A simple, considered process</h2>
        </div>
        <div class="process__grid">
          @for (step of steps; track step.title; let i = $index) {
            <div class="process__step" appReveal [revealDelay]="i * 90">
              <span class="process__num">0{{ i + 1 }}</span>
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
      :host { display: block; }
      .process__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: clamp(1.5rem, 4vw, 3rem);
      }
      .process__step { text-align: center; }
      .process__num {
        display: inline-block;
        font-family: var(--font-head);
        font-size: 2.6rem;
        font-weight: 800;
        color: var(--accent);
        opacity: 0.4;
        margin-bottom: 0.6rem;
      }
      .process__step h3 { font-size: 1.25rem; margin-bottom: 0.5rem; }
      .process__step p { color: var(--text-muted); font-size: 0.95rem; }
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

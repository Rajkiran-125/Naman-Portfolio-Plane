import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { AnimateOnScrollDirective } from '../../shared/animate-on-scroll.directive';
import { SITE, SOCIAL_LINKS } from '../../data/site';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, BreadcrumbComponent, AnimateOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  readonly site = SITE;
  readonly social = SOCIAL_LINKS;
  readonly whatsappLink = `https://wa.me/${SITE.whatsapp}`;
  readonly mapUrl: SafeResourceUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    SITE.mapEmbedUrl,
  );

  readonly sent = signal(false);

  readonly model = { name: '', email: '', subject: '', message: '' };

  submit(form: NgForm): void {
    if (form.invalid) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }
    // No backend in this project — compose an email the visitor can send.
    const body = encodeURIComponent(
      `Name: ${this.model.name}\nEmail: ${this.model.email}\n\n${this.model.message}`,
    );
    const subject = encodeURIComponent(this.model.subject || 'New enquiry from your website');
    window.location.href = `mailto:${this.site.email}?subject=${subject}&body=${body}`;
    this.sent.set(true);
  }
}

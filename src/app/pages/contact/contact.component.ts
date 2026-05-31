import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { InstagramFeedComponent } from '../../shared/instagram-feed/instagram-feed.component';
import { SITE } from '../../data/site';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BreadcrumbComponent, InstagramFeedComponent],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  readonly email = SITE.email;
  readonly phone = SITE.phone;
  readonly address = SITE.address;
  readonly mapUrl: SafeResourceUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    SITE.mapEmbedUrl,
  );
}

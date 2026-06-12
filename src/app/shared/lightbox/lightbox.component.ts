import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

export interface LightboxImage {
  src: string;
  title?: string;
  meta?: string;
}

/** Full-screen image viewer with prev/next/esc and a caption. */
@Component({
  selector: 'app-lightbox',
  standalone: true,
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightboxComponent {
  @Input() images: LightboxImage[] = [];
  @Input() index: number | null = null;

  @Output() indexChange = new EventEmitter<number>();
  @Output() closed = new EventEmitter<void>();

  get open(): boolean {
    return this.index !== null && this.index >= 0 && this.images.length > 0;
  }

  get current(): LightboxImage | null {
    return this.index !== null ? this.images[this.index] : null;
  }

  close(): void {
    this.closed.emit();
  }

  prev(event?: Event): void {
    event?.stopPropagation();
    if (this.index === null) return;
    const len = this.images.length;
    this.indexChange.emit((this.index - 1 + len) % len);
  }

  next(event?: Event): void {
    event?.stopPropagation();
    if (this.index === null) return;
    const len = this.images.length;
    this.indexChange.emit((this.index + 1) % len);
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.open) return;
    switch (event.key) {
      case 'Escape':
        this.close();
        break;
      case 'ArrowLeft':
        this.prev();
        break;
      case 'ArrowRight':
        this.next();
        break;
    }
  }
}

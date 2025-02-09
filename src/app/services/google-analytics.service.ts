import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      gtag('config', 'G-SC4K8QC7M4', {
        'page_path': event.urlAfterRedirects
      });
    });
  }

  // Método para enviar eventos personalizados
  public eventEmitter(eventName: string, eventCategory: string, eventAction: string, eventLabel: string, eventValue: number) {
    gtag('event', eventName, {
      event_category: eventCategory,
      event_action: eventAction,
      event_label: eventLabel,
      value: eventValue
    });
  }
}

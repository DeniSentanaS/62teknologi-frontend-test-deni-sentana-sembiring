import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Event, NavigationEnd, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public menuDrawer: any;
  public menuLogin: any;
  public currentUrl = new BehaviorSubject<string>(undefined!);

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public openNav(): void {
    this.menuDrawer.open();
  }

  public closeNav() {
    this.menuDrawer.close();
  }

  public openLogin() {
    this.menuLogin.open();
  }

  public closeLogin() {
    this.menuLogin.close();
  }
}

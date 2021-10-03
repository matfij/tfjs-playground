import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public _navigationItems: NavigationItem[] = [
    {
      label: 'common.digitsClassification',
      href: 'write-number'
    },
    {
      label: 'common.toxicityAnalysis',
      href: 'write-review'
    },
    {
      label: 'common.misc',
      href: 'misc'
    },
  ];

  constructor(
    private _router: Router
  ) {}

  public _navigate(href: string, ...args: any[]) {
    this._router.navigate([href, args]);
  }
}

interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

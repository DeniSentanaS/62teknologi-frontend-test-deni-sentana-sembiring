import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NavigationService } from '../navigation.service';
import { Router } from '@angular/router';
import { NavigationItem } from '../navigation-item';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  animations: [
    trigger('iconRotate', [
      state('collapsed', style({transform: 'rotate(270deg)'})),
      state('expanded', style({transform: 'rotate(360deg)'})),
      transition('expanded <=> collapsed',
        animate('350ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),
    trigger('menuItem', [
      state('collapsed', style({'height': 0, 'opacity': 0})),
      state('expanded', style({'opacity': 1})),
      transition('collapsed <=> expanded',
        animate(200)
      )
    ]),
    // trigger('menuItem', [
    //   state('collapsed', style({height: '0px'})),
    //   state('expanded', style({height: '*'})),
    //   transition('collapsed <=> expanded',
    //     animate('350ms cubic-bezier(0.4,0.0,0.2,1)')
    //   )
    // ])
  ],
})
export class NavMenuComponent implements OnInit {

  expand: boolean = true;

  @HostBinding('attr.aria-expanded') ariaExpanded = this.expand;
  @Input() item: NavigationItem;
  @Input() depth: number;

  constructor(
    public navService: NavigationService,
    public router: Router
  ){}

  ngOnInit(): void {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        this.expand = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expand;
      }
    });
  }

  public onItemSelected(item: NavigationItem): void {
    if (!this.item.children || !this.item.children.length) {
      this.router.navigate([this.item.route]);
      // this.navService.closeNav()
    }
    if (this.item.children && this.item.children.length) {
      this.expand = !this.expand;
    }
  }
}

import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { NavigationItem } from './navigation-item';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit{
  title = 'web';

  @ViewChild('menuDrawer') menuDrawer: ElementRef;

  constructor(
    public navService: NavigationService,
  ) {

  }
  ngAfterViewInit(): void {
    this.navService.menuDrawer = this.menuDrawer;
  }

  ngOnInit(): void {

  }

  navigationItems: NavigationItem[]=[
    {
      displayName: 'Businesses',
      iconName: '',
      route: '/businesses',
      user: '',
      children: [],
    },

    {
      displayName: 'Categories',
      iconName: '',
      route: '/categories',
      user: '',
      children: [],
    },

    {
      displayName: 'Locations',
      iconName: '',
      route: '/locations',
      user: '',
      children: [],
    },
  ];
}

import { Component, Output, EventEmitter, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 })) // Fixed missing closing parenthesis
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', keyframes([
          style({ transform: 'rotate(0deg)', offset: '0' }),
          style({ transform: 'rotate(2turn)', offset: '1' })
        ]))
      ])
    ])
  ]
})
export class SidenavComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loggedUser: any;
 
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth: number = 0; // Consider using const
  navData = navbarData;
 

 
  constructor(@Inject(PLATFORM_ID) private platformId: object ) {
    const localUser = localStorage.getItem('loggedUser');
    if(localUser !=null){
      this.loggedUser = JSON.parse(localUser);
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth <= 768) {
        this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
      }
    } else {
      // Handle server-side logic if applicable
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  toggleCollapse(): void {
    console.log('Toggle clicked, current state:', this.collapsed);
    this.collapsed = !this.collapsed;
    console.log('New state:', this.collapsed);
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
}
  closesidenav(): void { 
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  handleSidenavToggle(data: SideNavToggle) {
    console.log('Sidenav toggled:', data);
    // Handle the toggle event
}

}

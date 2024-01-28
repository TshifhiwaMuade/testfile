import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loginForm2';
  isSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data:SideNavToggle): void{
      this.screenWidth = data.screenWidth;
      this.isSideNavCollapsed = data.collapsed;
  }
}

import { Component } from '@angular/core';
import { appRoutes } from 'src/app/constants/app-routes';
import { MenuItem } from './menu-item.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems: MenuItem[] = [{
    Name: 'New lesson',
    Route: `${appRoutes.LessonsModule.Base}/${appRoutes.LessonsModule.New}`
  }];
  
}

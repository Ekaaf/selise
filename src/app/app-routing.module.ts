import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  // { path: '', component: SidebarComponent },
  { path: 'customeractivity', component: NotificationsComponent },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(mod => mod.ListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeaserlistComponent, StageComponent } from './common/components';

const routes: Routes = [
  {
    path: 'event',
    component: StageComponent
  },
  {
    path: 'sponsors',
    component: TeaserlistComponent
  },
  {
    path: 'speakers',
    component: TeaserlistComponent
  },
  {
    path: 'location',
    component: TeaserlistComponent
  },
  {
    path: 'organizers',
    component: TeaserlistComponent
  },
  {
    path: '**',
    redirectTo: 'foo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollOffset: [0, 100] // [x, y]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

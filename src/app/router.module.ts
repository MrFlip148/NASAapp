import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';

import { HomeViewComponent } from './components/views/home/home.view';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeViewComponent
    },
    /*{
        path: 'asset/:nasa_id',
        component: AssetViewComponent
    },*/
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';

import { HomeViewComponent } from './components/views/home/home.view';
import { ImageViewComponent } from './components/views/image-detail/image-detail.view';
import { VideoViewComponent } from './components/views/video-detail/video-detail.view';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeViewComponent
    },
    {
        path: 'image/:nasa_id',
        component: ImageViewComponent
    },
    {
        path: 'video/:nasa_id',
        component: VideoViewComponent
    },
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

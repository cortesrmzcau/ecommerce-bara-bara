import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(h => h.HomeModule),
    data: {
      preload: true
    }
  },
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(h => h.WebsiteModule),
    data: {
      preload: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

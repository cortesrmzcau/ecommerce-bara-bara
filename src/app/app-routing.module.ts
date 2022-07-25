import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './website/pages/example/example.component';


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
  },
  {
    path: '',
    loadChildren: () => import('./cms/cms.module').then(c => c.CmsModule),
    data: {
      preload: true
    }
  },
  {
    path: 'example',
    component: ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

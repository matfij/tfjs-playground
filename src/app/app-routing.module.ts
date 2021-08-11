import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'write-number',
    pathMatch: 'full'
  },
  {
    path: 'write-number',
    loadChildren: () => import('./pages/write-number/write-number.module').then(m => m.WriteNumberModule)
  },
  {
    path: 'write-review',
    loadChildren: () => import('./pages/write-review/write-review.module').then(m => m.WriteReviewModule)
  },
  {
    path: '**',
    redirectTo: 'write-number'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

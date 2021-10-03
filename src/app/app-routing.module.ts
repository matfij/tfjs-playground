import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'write-number',
    pathMatch: 'full'
  },
  {
    path: 'misc',
    loadChildren: () => import('./pages/misc/misc.module').then(m => m.MiscModule)
  },
  {
    path: 'write-number',
    loadChildren: () => import('./pages/digit-classification/digit-classification.module').then(m => m.WriteNumberModule)
  },
  {
    path: 'write-review',
    loadChildren: () => import('./pages/toxicity-analysis/toxicity-analysis.module').then(m => m.ToxicityAnalysisModule)
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

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ToxicityAnalysisComponent } from "./toxicity-analysis.component";

const routes: Routes = [
  {
    path: '',
    component: ToxicityAnalysisComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToxicityAnalysisRoutingModule {}

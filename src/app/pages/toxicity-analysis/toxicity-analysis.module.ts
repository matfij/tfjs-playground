import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/@core/core.module";
import { ToxicityAnalysisRoutingModule } from "./toxicity-analysis-routing.module";
import { ToxicityAnalysisComponent } from "./toxicity-analysis.component";

@NgModule({
  declarations: [
    ToxicityAnalysisComponent
  ],
  imports: [
    ToxicityAnalysisRoutingModule,
    CoreModule.forChild()
  ]
})
export class ToxicityAnalysisModule {}

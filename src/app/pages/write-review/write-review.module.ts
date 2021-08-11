import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/@core/core.module";
import { WriteReviewRoutingModule } from "./write-review-routing.module";
import { WriteReviewComponent } from "./write-review.component";

@NgModule({
  declarations: [
    WriteReviewComponent
  ],
  imports: [
    WriteReviewRoutingModule,
    CoreModule.forChild()
  ]
})
export class WriteReviewModule {}

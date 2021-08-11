import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/@core/core.module";
import { WriteReviewComponent } from "./write-review.component";

@NgModule({
  declarations: [
    WriteReviewComponent
  ],
  imports: [
    CoreModule.forChild()
  ]
})
export class WriteReviewModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UiSwitchComponent } from "./ui-switch/ui-switch.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

@NgModule({
  declarations: [UiSwitchComponent],
  imports: [CommonModule, MatSlideToggleModule],
  exports: [UiSwitchComponent],
})
export class SharedModule {}

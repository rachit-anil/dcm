import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "ui-switch",
  templateUrl: "./ui-switch.component.html",
  styleUrl: "./ui-switch.component.scss",
})
export class UiSwitchComponent {
  @Input() defaultBgColor: string = "red";
  @Input() checked: boolean = false;
  @Input() labelOn: string = "On";
  @Input() labelOff: string = "Off";
  @Input() disabled: boolean = false;
  @Output() change = new EventEmitter<boolean>();

  onToggle(event: any) {
    this.checked = event.checked;
    this.change.emit(this.checked);
  }
}

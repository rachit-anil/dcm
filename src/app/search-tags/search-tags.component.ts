import { Component, Input } from "@angular/core";

@Component({
  selector: "app-search-tags",
  templateUrl: "./search-tags.component.html",
  styleUrl: "./search-tags.component.scss",
})
export class SearchTagsComponent {
  @Input() tags: string = [
    "tag1",
    "tag19",
    "tag81",
    "tag7",
    "tag4",
    "tag2",
    "tag1",
    "tag19",
    "tag81",
    "tag7",
    "tag4",
    "tag2",
    "tag1",
    "tag19",
    "tag81",
    "tag7",
    "tag4",
    "tag2",
    "tag1",
    "tag19",
    "tag81",
    "tag7",
    "tag4",
    "tag2",
    "tag1",
    "tag19",
    "tag81",
    "tag7",
    "tag4",
    "tag2",
    "tag1",
    "tag19",
    "tag81",
    "tag7",
    "tag4",
    "tag2",
    "tag1",
    "tag19",
    "tag81",
    "tag7",
    "tag4",
    "tag2",
    "tag1",
    "tag19",
    "tag81",
    "tag7",
    "tag4",
    "tag2",
  ].join(", ");
  @Input() width: string = "200px";

  ngOnInit() {
    (
      document.getElementsByClassName("tags-container")[0] as HTMLElement
    ).style.width = this.width;
  }
}

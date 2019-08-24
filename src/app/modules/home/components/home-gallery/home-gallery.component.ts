import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-home-gallery",
  templateUrl: "./home-gallery.component.html",
  styleUrls: ["./home-gallery.component.scss"]
})
export class HomeGalleryComponent implements OnInit {

  @Input()
  imgs: string[];

  @Input()
  maxHeight: string;

  constructor() {}

  ngOnInit() {}
}

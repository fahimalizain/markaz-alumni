import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-home-item-container",
  templateUrl: "./home-item-container.component.html",
  styleUrls: ["./home-item-container.component.scss"]
})
export class HomeItemContainerComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  icon: string;

  constructor() {}

  ngOnInit() {}
}

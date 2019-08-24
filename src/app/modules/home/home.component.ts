import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {

  itemHeightinEM = 30;
  orma_pics = ["/assets/markaz/orma19/1.jpg", "/assets/markaz/orma19/2.jpg", "/assets/markaz/orma19/3.jpg"];

  constructor() {}
}

import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {

  itemHeightinEM = 30;
  orma_pics = ["/assets/markaz/orma19/1.jpg", "/assets/markaz/orma19/2.jpg", "/assets/markaz/orma19/3.jpg"];
  school_pics = [
    "/assets/markaz/school/1.jpg",
    "/assets/markaz/school/2.jpg",
    "/assets/markaz/school/3.jpg",
    "/assets/markaz/school/4.jpg",
    "/assets/markaz/school/5.jpg",
    "/assets/markaz/school/6.jpg",
    "/assets/markaz/school/7.jpg",
    "/assets/markaz/school/8.jpg",
    "/assets/markaz/school/9.jpg",
    "/assets/markaz/school/10.jpg",
    "/assets/markaz/school/11.jpg",
    "/assets/markaz/school/12.jpg",
    "/assets/markaz/school/13.jpg",
    "/assets/markaz/school/14.jpg",
    "/assets/markaz/school/15.jpg",
    "/assets/markaz/school/16.jpg",
    "/assets/markaz/school/17.jpg",
    "/assets/markaz/school/18.JPG",
    "/assets/markaz/school/19.jpg",
    "/assets/markaz/school/20.jpg",
    "/assets/markaz/school/21.jpg",
  ]

  constructor() {}
}

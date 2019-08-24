import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-core-committee-members",
  templateUrl: "./core-committee-members.component.html",
  styleUrls: ["./core-committee-members.component.scss"]
})
export class CoreCommitteeMembersComponent implements OnInit {
  members = [
    {
      name: "Ajmal Anathan",
      batch: "10th",
      role: "President",
      mob: "+919745537511",
      img: "/assets/markaz/officebearers/ajmal.jpg"
    },
    {
      name: "Affan Ali",
      batch: "10th",
      role: "Secretary",
      mob: "+919539592511",
      img: "/assets/markaz/officebearers/affan.jpg"
    },
    {
      name: "Muhammed Suneer",
      batch: "10th",
      role: "Treasurer",
      mob: "+919567373929",
      img: "/assets/markaz/officebearers/suneer.jpg"
    },
    {
      name: "Thahira KK",
      batch: "10th",
      role: "Vice President",
      mob: "+919447841096",
      img: "/assets/markaz/officebearers/thahira.jpg"
    },
    {
      name: "Shafeeque P",
      batch: "10th",
      role: "Vice President",
      mob: "+917907275192",
      img: "/assets/markaz/officebearers/shafeeq.jpg"
    },
    {
      name: "Sajna PB",
      batch: "10th",
      role: "Joint-Secretary",
      mob: "+919961372933",
      img: "/assets/markaz/officebearers/sajna.jpg"
    },
    {
      name: "Mohammed Fasil KK",
      batch: "10th",
      role: "Joint-Secretary",
      mob: "+919447841096",
      img: "/assets/markaz/officebearers/fasil.jpg"
    }
  ];

  constructor() {}

  ngOnInit() {}
}

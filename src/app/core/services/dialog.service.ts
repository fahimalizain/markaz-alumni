import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class DialogService {
  constructor(private dialog: MatDialog) { }

  public init() {

  }
}

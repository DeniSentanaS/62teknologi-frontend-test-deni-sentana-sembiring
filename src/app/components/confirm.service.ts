import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "./confirm-dialog/confirm-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(public dialog: MatDialog) {}

  public openConfirmDialog(message: string) {
    return this.dialog.open(ConfirmDialogComponent, {
      disableClose: true,
      panelClass: 'custom-dialog-container',
      width: '360px',
      height: '190px',
      data: {
        message: message,
      },
    });
  }

  public openFormNotify(message: string) {
    return this.dialog.open(ConfirmDialogComponent, {
      disableClose: true,
      panelClass: 'custom-dialog-container',
      width: '360px',
      height: '180px',
      data: {
        message: message,
      },
    });
  }
}

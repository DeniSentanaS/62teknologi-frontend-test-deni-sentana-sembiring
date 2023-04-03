import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Businesses} from "../../../_models/businesses.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ConfirmService} from "../../../components/confirm.service";

@Component({
  selector: 'app-businesses-form',
  templateUrl: './businesses-form.component.html',
  styleUrls: ['./businesses-form.component.scss']
})
export class BusinessesFormComponent implements OnInit{

  actions: string;
  objData: any;
  form: FormGroup;

  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)public dataObject: Businesses,
    public dialogRef: MatDialogRef<BusinessesFormComponent>,
    public formBuilder: FormBuilder,
    public confirmService: ConfirmService
  ) {
    this.objData = {...dataObject};
    this.dialogRef.disableClose = true;
    this.actions = this.objData.actions;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      alias: ['', Validators.required],
      name: ['', Validators.required],
      imageUrl: ['', Validators.required],
      isClosed: ['', Validators.required],
      url: ['', Validators.required],
      reviewCount: ['', Validators.required],
      rating: ['', Validators.required],
      displayPhone: ['', Validators.required],
      distance: ['', Validators.required],
      categories: ['', Validators.required],
      locations: ['', Validators.required],
      transactions: ['', Validators.required],
    });
  }

  public onSubmit() {
    this.confirmService
      .openConfirmDialog('Are you sure want to ' + this.actions + ' data?')
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.dialogRef.close({event: this.actions, data: this.objData});
        }
      });
  }

  public closeDialog() {
    this.confirmService
      .openConfirmDialog('Are you sure want to close?')
      .afterClosed()
      .subscribe((res) => {
        console.log(res);
        if (res) {
          this.dialogRef.close({event: 'Closed'});
        }
      });
  }
}

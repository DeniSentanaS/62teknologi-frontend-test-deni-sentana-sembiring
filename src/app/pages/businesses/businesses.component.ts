import {Component, OnInit} from '@angular/core';
import {BusinessesService} from "../../_services/businesses.service";
import {Businesses} from "../../_models/businesses.model";
import {BusinessesFormComponent} from "./businesses-form/businesses-form.component";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmService} from "../../components/confirm.service";
import {ToastService} from "../../toast.service";

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.scss']
})
export class BusinessesComponent implements OnInit {

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  actions: string
  searchKey: string

  business: Businesses[]
  ratingDisplay: number

  p: number =1
  itemPerpage:number=10
  total: any

  constructor(
    public businessesService: BusinessesService,
    public dialogForm: MatDialog,
    public service: BusinessesService,
    public confirmService: ConfirmService,
    public toastr: ToastService
  ) {
  }

  ngOnInit(): void {
    this.initData()
  }

  public initData() {
    if (this.isLoadingResults) {
      this.businessesService.getBusinesses().subscribe(list => {
        this.business = list.data
        this.ratingDisplay = list.data.rating
        this.isLoadingResults = false
        this.total = list.data.length
      }, err => {
        this.isLoadingResults = false
      })
    }
  }

  public openForm(actions: string, obj: any) {
    obj.actions = actions;
    const dialogRef = this.dialogForm.open(BusinessesFormComponent, {
      panelClass: 'custom-dialog-container',
      width: '640px',
      data: obj,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.create(result.data);
      } else if (result.event == 'Update') {
        this.update(result.data.id, result.data);
      } else {
      }
    });
  }

  public refresh() {
    this.isLoadingResults = true;
    this.get();
  }

  public get() {
    if (this.isLoadingResults) {
      this.service.getBusinesses().subscribe(list => {
        this.business = list.data
          this.isLoadingResults = false;
        },
        (err) => {
          this.isLoadingResults = false;
        }
      );
    }
  }

  public create(objectData: any) {
    this.service.create(objectData).subscribe((data) => {
      this.isLoadingResults = true;
      this.get();
      this.toastr.showSuccess('Data successfully created', 'Success')
    });
  }

  public update(id: any, objectData: any) {
    this.service.update(id, objectData).subscribe((data) => {
      this.isLoadingResults = true;
      this.get();
      this.toastr.showSuccess('Data successfully updated', 'Success')
    });
  }

  public delete(id: any) {
    this.service.delete(id).subscribe((data) => {
      this.isLoadingResults = true;
      this.get();
      this.toastr.showSuccess('Data successfully deleted', 'Success')
    });
  }

  public deleteConfirm(objectData: any) {
    this.confirmService
      .openConfirmDialog('Are you sure want to Delete this data?')
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.delete(objectData.id);
        }
      });
  }

  public keyUpFilter(event: Event) {
    // this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
}

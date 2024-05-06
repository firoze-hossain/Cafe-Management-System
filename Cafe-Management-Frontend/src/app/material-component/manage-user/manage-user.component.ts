import {Component, OnInit} from '@angular/core';
import {BillService} from "../../services/bill.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {SnackbarService} from "../../services/snackbar.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {MatTableDataSource} from "@angular/material/table";
import {GlobalConstants} from "../../shared/global-constants";

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'contactNumber', 'status'];
  dataSource: any;
  responseMessage: any;

  constructor(private userService: UserService,
              private ngxService: NgxUiLoaderService,
              private snackbarService: SnackbarService) {

  }

  ngOnInit(): void {
    this.ngxService.start();
    this.tableData();
  }

  tableData() {
    this.userService.getUsers().subscribe((res: any) => {
      this.ngxService.stop();
      this.dataSource = new MatTableDataSource(res);
    }, (error: any) => {
      this.ngxService.stop();
      console.log(error);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onChange(status: any, id: any) {
    this.ngxService.start();
    let data = {
      status: status.toString(),
      id: id
    }
    this.userService.update(data).subscribe((res: any) => {
      this.ngxService.stop();
      this.responseMessage = res?.message;
      this.snackbarService.openSnackBar(this.responseMessage, 'Success');
    }, (error: any) => {
      this.ngxService.stop();
      console.log(error);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }
}

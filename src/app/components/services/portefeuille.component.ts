import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

import {DialogComponent} from '../dialog/dialog.component';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Overlay} from '@angular/cdk/overlay';


@Component({
  selector: 'app-portefeuille',
  templateUrl: './portefeuille.component.html',
  styleUrls: ['./portefeuille.component.css']
})
export class PortefeuilleComponent implements OnInit {
  constructor(private dialog: MatDialog,
              private httpService: HttpClient,
              private overlay: Overlay) {
  }

  arrayElem;


  openDialog(x: string): void {
    let i: number;
    for (i = 0; i <= this.arrayElem.length; i++) {
      if (x === this.arrayElem[i].ID) {
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '95%',
          maxWidth: '100%',
          data: this.arrayElem[i]
        });
      }
    }
  }

  ngOnInit() {
    this.httpService.get('../assets/first.json').subscribe(
      data => {
        this.arrayElem = data as string [];	 // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    console.log(this.arrayElem);
  }
}

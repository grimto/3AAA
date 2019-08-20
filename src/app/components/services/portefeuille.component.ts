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
  uri = 'http://localhost:4000/objectss';

  constructor(private dialog: MatDialog,
              private httpService: HttpClient) {
  }

  arrayElem;

  UpdateObject(title, paragraph, images) {
  }

  getObject(titre) {
    return this.httpService.get(`${this.uri + '/titre/' + titre}`);
  }

  openDialog(x: string): void {
    let i: number;
    for (i = 0; i <= this.arrayElem.length; i++) {
      if (x === this.arrayElem[i]._titre) {
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '95%',
          maxWidth: '100%',
          data: this.arrayElem[i]
        });
      }
    }
  }

  ngOnInit() {
    this.httpService.get(`${this.uri}`).subscribe(
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

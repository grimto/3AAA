import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

import {DialogComponent} from '../dialog/dialog.component';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-portefeuille',
  templateUrl: './portefeuille.component.html',
  styleUrls: ['./portefeuille.component.css']
})
export class PortefeuilleComponent implements OnInit {
  constructor(private dialog: MatDialog,
              private httpService: HttpClient) {
  }

  arrayElem;

  openDialog(x: string): void {
    console.log(this.arrayElem[0].ID);
    let i: number;
    for (i = 0; i <= this.arrayElem.length; i++) {
      if (x === this.arrayElem[i].ID) {
        const dialogRef = this.dialog.open(DialogComponent, {
          data: this.arrayElem[i]
        });
      }
    }
    /* if (x === 'threads') {
       const dialogRef = this.dialog.open(DialogComponent, {
         data: {
           ImagesLink: [
             '../../../assets/img/3a/batiments.png',
             '../../../assets/img/3a/batiments.png'
           ],
           titre: 'first',
           capt: ' lorem ipsulm ....',
           par: 'exorcisamuste omnis imundus,',
         }
       });
     } else if (x === '') {
       const dialogRef = this.dialog.open(DialogComponent, {
         data: {
           titre: 'Second',
           capt: ' lorem ipsulm psummmmpsumm....',
           par: 'exorcisamuste omnis imundus,',
         }
       });
     } else if (x === '') {
       const dialogRef = this.dialog.open(DialogComponent, {
         width: '600px',
         height: '400px',
         data: {
           titre: 'Second',
           capt: ' lorem ipsulm psummmmpsumm....',
           par: 'exorcisamuste omnis imundus,',
         }
       });
     } else if (x === '') {
       const dialogRef = this.dialog.open(DialogComponent, {
         width: '600px',
         height: '400px',
         data: {
           titre: 'Second',
           capt: ' lorem ipsulm psummmmpsumm....',
           par: 'exorcisamuste omnis imundus,',
         }
       });
     } else if (x === '') {
       const dialogRef = this.dialog.open(DialogComponent, {
         width: '600px',
         height: '400px',
         data: {
           titre: 'Second',
           capt: ' lorem ipsulm psummmmpsumm....',
           par: 'exorcisamuste omnis imundus,',
         }
       });
     } else if (x === '') {
       const dialogRef = this.dialog.open(DialogComponent, {
         width: '600px',
         height: '400px',
         data: {
           titre: 'Second',
           capt: ' lorem ipsulm psummmmpsumm....',
           par: 'exorcisamuste omnis imundus,',
         }
       });
     }*/
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

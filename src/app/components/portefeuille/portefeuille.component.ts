import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-portefeuille',
  templateUrl: './portefeuille.component.html',
  styleUrls: ['./portefeuille.component.css']
})
export class PortefeuilleComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  openDialog() : void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width : '80%',
      data: {
        titre: 'first',
        capt: ' lorem ipsulm and shit ....',
        par: 'exorcisamuste omnis imundus,',
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }


}

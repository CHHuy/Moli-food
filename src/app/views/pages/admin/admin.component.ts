import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  orders;
  date: string;
  constructor(private datePipe: DatePipe,
              private afs: AngularFirestore) {
  }

  ngOnInit(): void {
    const date = Date.now();
    this.date = this.datePipe.transform(date, 'dd-MM-yyyy');
    this.orders = this.afs.collection(`order/${this.date}/items`).valueChanges({idField: 'id'});
  }

}

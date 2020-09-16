import {Component, OnInit} from '@angular/core';
import {DatePipe, formatNumber} from '@angular/common';
import {AngularFirestore} from '@angular/fire/firestore';
import {pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from '@core/services/auth.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  date: string;
  detailConfirm: any = [];
  customers;
  totalItems: number;
  totalSum: number;

  menuCheck: any = [];

  constructor(private datePipe: DatePipe,
              private afs: AngularFirestore,
              public auth: AuthService) {
  }

  ngOnInit(): void {
    const date = Date.now();
    this.date = this.datePipe.transform(date, 'dd-MM-yyyy');
    this.afs.collection(`orders/${this.date}/items`).valueChanges()
      .pipe(
        map((res: any) => {
          console.log(res);
          const detailConfirm = [];
          res.map(v => {
            this.menuCheck.push(...v.details);
            v.details.map(item => {
              for (let i = 0; i < item.quantity; i++) {
                detailConfirm.push(item.name);
              }
            });
          });
          return detailConfirm;
        })
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          console.log('this.menuCheck:', this.menuCheck);
          this.totalItems = res.length;
          const result = {};
          res.forEach((x) => {
            result[x] = (result[x] || 0) + 1;
          });
          console.log('result:', result);
          // console.log('result:', Object.entries(result));
          const detailConfirm = Object.entries(result);
          this.totalSum = 0;
          detailConfirm.forEach((v: any) => {
            const item = _.find(this.menuCheck, ['name', v[0]]);
            v.push(item.price);
            this.totalSum = this.totalSum + (item.price * v[1]);
          });
          this.detailConfirm = detailConfirm;
        }
      );

    this.customers = this.afs.collection(`orders/${this.date}/items`).valueChanges();
  }
}

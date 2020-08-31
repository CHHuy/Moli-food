import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {
  items: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
    this.items = this.firestore.collection('merchant').valueChanges({idField: 'id'});
  }

}

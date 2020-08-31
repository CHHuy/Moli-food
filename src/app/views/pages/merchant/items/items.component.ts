import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {InputNumberModule} from 'primeng/inputnumber';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  merchantId;
  merchant;
  menuItems;

  totalPrice: any;
  totalQuantity: any;

  constructor(private firestore: AngularFirestore, private route: ActivatedRoute, private inputNumber: InputNumberModule) {
    this.merchantId = this.route.snapshot.params.merchantId;

    this.merchant = this.firestore.doc(`merchant/${this.merchantId}`).valueChanges();

    this.firestore.collection(`merchant/${this.merchantId}/items`).valueChanges({idField: 'id'}).subscribe(
      (res: any) => {
        this.menuItems = res.map(v => {
          return {
            ...v,
            quantity: 0
          };
        });
        console.log(this.menuItems);
      }
    );
    // this.item = this.itemDoc.valueChanges();

  }

  ngOnInit(): void {
  }

  onChangeNumber(event: any) {
    let totalPrice = 0;
    let totalQuantity = 0;

    this.menuItems.map(v => {
      const vt = v.price * v.quantity;
      totalPrice = totalPrice + vt;
      totalQuantity = totalQuantity + v.quantity;
    });

    this.totalPrice = totalPrice;
    this.totalQuantity = totalQuantity;

    /*const totalPrice = this.menuItems.map(v => {
      return v.quantity * v.price;
    });
    const totalQuantity = this.menuItems.map(v => {
      return v.quantity;
    });
    const sum = total.reduce((a, b) => {
      return a + b;
    }, 0);
    this.total = {
      quantity: sum
    };*/
  }
}

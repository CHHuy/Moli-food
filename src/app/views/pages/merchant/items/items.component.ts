import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';
import {AuthService} from '@core/services/auth.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  merchantId;
  merchant;
  menuItems;
  data;
  quantity;
  submitted: boolean;
  orderDetails: any = [];
  totalPrice = 0;
  totalQuantity = 0;

  date: string;
  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  constructor(private firestore: AngularFirestore,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private http: HttpClient,
              public auth: AuthService) {
    this.merchantId = this.route.snapshot.params.merchantId;
    this.merchant = this.firestore.doc(`merchant/${this.merchantId}`).valueChanges();
    /*    this.firestore.collection(`merchant/${this.merchantId}/items`).valueChanges({idField: 'id'}).subscribe(
          (res: any) => {
            this.menuItems = res.map(v => {
              return {
                ...v,
                quantity: 0
              };
            });
            console.log(this.menuItems);
          }
        );*/
    // this.item = this.itemDoc.valueChanges();
  }

  ngOnInit(): void {
    const date = Date.now();
    this.date = this.datePipe.transform(date, 'dd-MM-yyyy');
    this.getData(this.merchantId);
  }

  onChangeNumber(event: any, item: any) {
    this.totalPrice = 0;
    this.totalQuantity = 0;

    const itemMenu = {
      id: item.id,
      name: item.name,
      price: item.discount_price.value,
      quantity: event
    };
    if (_.find(this.orderDetails, ['id', item.id])) {
      this.orderDetails = this.orderDetails.map(v => {
        return v.id === itemMenu.id ? itemMenu : v;
      });
    } else {
      this.orderDetails.push(itemMenu);
    }
    this.orderDetails.map(v => {
      this.totalPrice = this.totalPrice + (v.price * v.quantity);
      this.totalQuantity = this.totalQuantity + v.quantity;
    });
  }

  async onSubmit(user: any) {
    this.submitted = true;
    const res = await this.firestore.collection(`orders/${this.date}/items`).add({
      totalQuantity: this.totalQuantity,
      totalPrice: this.totalPrice,
      details: this.orderDetails,
      user
    });
  }

  async getData(name: string) {
    const data: any = await this.http.get(`/assets/data/${name}.json`).toPromise();
    console.log(data);
    this.data = data.reply.menu_infos;
  }

  async onFacebookLogin() {
    await this.auth.facebookLogin();
  }

  scrollToEl(event: any) {
    const id = event.target.value;
    const elmnt = document.getElementById(id);
    // console.log(elmnt);
    elmnt.scrollIntoView();
    // elmnt.scrollTop = elmnt.offsetTop;

    // document.querySelector(`#${id}`).scrollIntoView({behavior: 'smooth'});
  }
}

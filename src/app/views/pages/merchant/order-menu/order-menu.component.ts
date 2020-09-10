import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.scss']
})
export class OrderMenuComponent implements OnInit {
  data: any;
  submitted: boolean;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getData();
  }
  async getData() {
    const data: any = await this.http.get('/assets/data/vinbon.json').toPromise();
    console.log(data);
    this.data = data.reply.menu_infos;
  }
}

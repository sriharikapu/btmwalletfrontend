import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { PieChartPage } from './piechart/piechart';

@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})

export class ChartsPage {

  img: string;
  risk: string;
  price: string;
  holding: string;
  value: string;
  tapCount: number = 1;
  riskDescription: Array<string> = ['','LOW', 'MEDIUM', 'HIGH']
  priceDescription: Array<string> = ['','51', '52', '53']
  holdingDescription: Array<string> = ['','100', '200', '300']
  valueDescription: Array<string> = ['','5100', '10400', '15900']

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController) {

    this.loadScreen(this.tapCount);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartsPage');
    this.menuCtrl.enable(true);
  }

  changeMascot(direction: string) {
    if(direction == 'left') {
      if(this.tapCount == 1) {
        this.tapCount = 3;
      } else {
        this.tapCount--;
      }
    } else {
      if(this.tapCount < 3) {
        this.tapCount += 1;
      } else {
        this.tapCount = 1;
      }
    }
    this.loadScreen(this.tapCount)
  }

  showPiecharts() {
    let count = {count: this.tapCount}
    this.navCtrl.push(PieChartPage, count)
  }

  loadScreen(count) {
    this.img = 'assets/images/coins-0'+ count + '.png'
    this.risk = this.riskDescription[count] + ' RISK INVESTMENT PRICE';
    this.price = this.priceDescription[count]
    this.holding = this.holdingDescription[count]
    this.value = this.valueDescription[count]

  }
}

/**
 * Created by Jorge on 5/29/2017.
 */
import {Component, OnInit} from '@angular/core';
import { MainViewDataService } from  './mainview-data.service';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-mainView',
  templateUrl: 'mainView.html',
  providers: [MainViewDataService]
})
export class MainViewPageComponent implements OnInit{
  bars: any[] = [];
  constructor(private mainViewDataService: MainViewDataService, public modalCtrl: ModalController) {

  }

  openModal() {
   // let modal = this.modalCtrl.create(SpecialsModalPage);
   // modal.present();
  }
  ngOnInit() {
    console.log('The component is initialized');
    //get the bars from the json file
    this.mainViewDataService.getBars().subscribe(data => this.bars = data);
  }
}

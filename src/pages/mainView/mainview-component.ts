/**
 * Created by Jorge on 5/29/2017.
 */
import { Component } from '@angular/core';
import { MainViewDataService } from  './mainview-data.service';

@Component({
  selector: 'page-mainView',
  templateUrl: 'mainView.html',
  providers: [
    MainViewDataService
  ]
})
export class MainViewPage {
  constructor() {

  }
}

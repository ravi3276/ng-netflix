import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import categorieData from '../../assets/mockdata/categories.json';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
    categories=categorieData;
  constructor(private modalContainer: ModalController) { }

  ngOnInit() {

  }

  dismiss() {
    this.modalContainer.dismiss();
  }

}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer/drawer.component';



@NgModule({
  declarations: [DrawerComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [DrawerComponent]
})
export class SharedComponentsModule { }

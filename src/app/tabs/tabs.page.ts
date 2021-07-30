import { DrawerService } from './../services/drawer.service';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { DrawerComponent } from '../components/drawer/drawer.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild(IonTabs) tabs;
  @ViewChild(DrawerComponent) drawer: DrawerComponent;
  selected='';
  backdropVisible=false;
  constructor(private drawerService: DrawerService, private changeDetectorRef: ChangeDetectorRef) {
    this.drawerService.drawerOpen.subscribe(drawerData => {
      if (drawerData && drawerData.open) {
        this.drawer.openDrawer(drawerData.title);
      }
    });
  }
  setSelectedTab(){
      this.selected=this.tabs.getSelected();
      // console.log(this.selected);
  }


  closeDrawer() {
    this.drawer.closeDrawer();
  }

  toggleBackdrop(isVisible) {
    this.backdropVisible = isVisible;
    this.changeDetectorRef.detectChanges();
  }
}

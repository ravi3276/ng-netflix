import { DomController, isPlatform } from '@ionic/angular';
import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective implements AfterViewInit {
  @Input('appHideHeader') header: any;
    private headerHeight= isPlatform('ios') ? 44:56;
    private children: any;
  constructor(private domCtrl: DomController, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
      this.header=this.header.el;
      this.children=this.header.children;
      console.log(this.header);
  }

  @HostListener('ionScroll',['$event']) onContentScroll($event: any) {
      const scrollTop = $event.detail.scrollTop;

      if(scrollTop<0){
        return;
      }

      let newPosition = -this.scrollTop/2;

      if(newPosition<-this.headerHeight){
        newPosition = -this.headerHeight;
      }

      let newOpacity = 1-(newPosition/-this.headerHeight)

      this.domCtrl.write(()=>{
        this.renderer.setStyle(this.header,'top',newPosition+'px');
        for(let c of this.children){
          this.renderer.setStyle(c,'opacity',newOpacity);
        }
      })
  }
}

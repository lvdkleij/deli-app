import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { Modals, ModalService } from '@components/modals';
import { DomController } from '@ionic/angular';


@Component({
  selector: 'navigation-top-with-searchbar-component',
  templateUrl: 'with-searchbar.component.html',
  styleUrls: ['with-searchbar.component.scss']
})
export class NavigationTopWithSearchbarComponent {

  modals = Modals;
  @Output() toolbar = new EventEmitter<any>();
  @Input() data: { title?: string } = {};

  header;

  mainToolbarHeight = 0;

  constructor(
    readonly modalService: ModalService,
    private readonly domCtrl: DomController,
    private readonly renderer: Renderer2
  ) {}


    onPresentModal() {
      //
      this.domCtrl.read(() => {
        this.mainToolbarHeight = this.header.el.firstElementChild.clientHeight;
        const newPosition = -this.mainToolbarHeight;

        this.domCtrl.write(() => {
          this.renderer.setStyle(this.header.el, 'top', `${newPosition}px`);

          // setTimeout(() => {
          //   this.renderer.setStyle(this.header.el, 'transition', 'none');
          // }, 200);
        });
      });
      this.modalService.present(Modals.SEARCH);
    }


    onDismissModal() {
      this.modalService.dismiss(Modals.SEARCH);

      this.domCtrl.write(() => {
        this.renderer.setStyle(this.header.el, 'top', '0');
      });
    }


    getMainToolbar($event) {
      this.header = $event;
      this.toolbar.emit($event);
    }


}

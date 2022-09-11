
import { AfterViewInit, Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ScalePageService } from '@services';
import { Modals } from '../modal.constants';
import { ModalService } from '../modal.service';
import { slideLeftAnim } from './create-shopping-list.animations';


@Component({
  selector: 'create-shopping-list-modal',
  templateUrl: 'create-shopping-list.modal.html',
  styleUrls: ['create-shopping-list.modal.scss'],
  animations: [slideLeftAnim]
})
export class CreateShoppingListModal implements OnInit {

  @HostBinding('@slideLeftAnim') get slideIn() { return this.value; };
  @HostBinding('style.height') height;
  @Output() done = new EventEmitter();

  subscription: Subscription;
  value = null;
  listName = '';
  backgroundColor = '';


  constructor(
    public modalService: ModalService,
    readonly scalePageService: ScalePageService
  ) {}

  ngOnInit(): void {
    this.subscription = this.modalService.isPresent$(Modals.CREATE_SHOPPING_LIST)
      .pipe(
        tap(value => value ? this.height = `${document.getElementsByTagName('ion-router-outlet')[1].clientHeight}px` : null)
      )
      .subscribe((value) => this.value = value);
  }

  onClose() {
    this.modalService.dismiss(Modals.CREATE_SHOPPING_LIST);
    this.scalePageService.resetScale();
  }

  onDone() {
    this.modalService.dismiss(Modals.CREATE_SHOPPING_LIST);
    this.done.emit({ listName: this.listName, backgroundColor: this.backgroundColor });
    this.scalePageService.resetScale();
  }
  onSelectBackground(backgroundColor: string) {
    this.backgroundColor = backgroundColor;
  }
}

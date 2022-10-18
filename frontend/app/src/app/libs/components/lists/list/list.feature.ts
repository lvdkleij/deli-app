import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Modals } from '../../modals/modal.constants';
import { ModalService } from '../../modals/modal.service';
import { fadeAnim, shrinkAnim } from './list.animations';



@Component({
  selector: 'list-feature',
  templateUrl: './list.feature.html',
  styleUrls: ['./list.feature.scss'],
  animations: [shrinkAnim, fadeAnim]
})
export class ListFeature {

  @Input() data;


  constructor(
    private readonly changeDetectionRef: ChangeDetectorRef,
    private modalService: ModalService
  ) {}


  onDeleteItem(location: 'itemsSelected' | 'itemsUnselected', i: number, j: number) {
    this.data[i][location].splice(j, 1);
    if (!this.data[i][location].length) {
      this.data.splice(i, 1);
    }

    this.changeDetectionRef.detectChanges();
  }

  onIsSelected(location: 'itemsSelected' | 'itemsUnselected', i: number, j: number) {
    setTimeout(() => {
      const value = this.data[i][location].splice(j, 1);

      if (location === 'itemsSelected') {
        this.data[i].itemsUnselected.unshift(value);
      } else {
        this.data[i].itemsSelected.unshift(value);
      }
    }, 100);
  }

  onContentClick(location: 'itemsSelected' | 'itemsUnselected', i: number, j: number) {
    this.modalService.present(Modals.ITEM);
  }

}

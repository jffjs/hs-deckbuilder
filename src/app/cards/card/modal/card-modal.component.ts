import {Component, Input} from 'angular2/core';
import {Card} from '../../cards.model.ts';

@Component({
  selector: 'hs-card-modal',
  template: require('./card-modal.component.html'),
  styles: [ require('./card-modal.component.css') ]
})
export class CardModalComponent {
  @Input() card: Card;

  close() {
    this.card = null;
  }
}

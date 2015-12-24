import {Component, Input} from 'angular2/core';
import {Card} from '../cards.model';

@Component({
  selector: 'hs-card-thumb',
  template: require('./card-thumb.component.html'),
  styles: [ require('./card-thumb.component.css') ]
})
export class CardThumbComponent {
  @Input() card: Card;
}

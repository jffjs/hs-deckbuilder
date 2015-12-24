import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import * as _ from 'lodash';
import {Card} from './cards.model';
import {CardsService} from './cards.service';
import {PaginatePipe} from '../pipes/paginate.ts';
import {CardThumbComponent} from './card/card-thumb.component';

@Component({
  selector: 'hs-cards',
  directives: [CardThumbComponent, CORE_DIRECTIVES],
  pipes: [PaginatePipe],
  providers: [CardsService],
  template: require('./cards.component.html')
})
export class CardsComponent {
  cards: Card[];
  currentPage: number;

  constructor(private cardsService: CardsService) {
    this.currentPage = 0;
    this.cardsService.getCards().subscribe((cards: Card[]) => {
      this.cards = _(cards)
        .reject((card: Card) => card.type === 'Hero')
        .sortByAll('playerClass', 'cost', 'name')
        .value();
    });
  }

  nextPage() {
    this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 0) {
     this.currentPage--;
    }
  }
}

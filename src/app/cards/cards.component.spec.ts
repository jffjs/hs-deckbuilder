import {it, inject, describe, beforeEachProviders} from 'angular2/testing';
import {provide} from 'angular2/core';
import {CardsComponent} from './cards.component';
import {CardsService} from './cards.service';
import * as Rx from 'rxjs/Rx';

let cards = [
  { cardId: 'DS1_185', name: 'Arcane Shot', type: 'Spell'},
  { cardId: 'CS2_087', name: 'Blessing of Might', type: 'Spell'},
  { cardId: 'EX1_621', name: 'Circle of Healing', type: 'Spell'},
  { cardId: 'EX1_607', name: 'Inner Rage', type: 'Spell'},
  { cardId: 'FP1_020', name: 'Avenge', type: 'Spell'},
  { cardID: 'HERO_01', name: 'Anduin Wrynn', type: 'Hero'}
];

class MockCardsService {
  getCards(collectible: boolean = true) {
    return Rx.Observable.of(cards);
  }
}

describe('CardsComponent', () => {
  beforeEachProviders(() => [
    CardsComponent,
    provide(CardsService, {useClass: MockCardsService})
  ]);

  describe('init', () => {
    it('should have currentPage of 0', inject([CardsComponent], (cardsComponent) => {
      expect(cardsComponent.currentPage).toEqual(0);
    }));

    it('should get cards and filter out Heroes', inject([CardsComponent], (cardsComponent) => {
      expect(cardsComponent.cards.length).toEqual(5);
    }))
  });
})

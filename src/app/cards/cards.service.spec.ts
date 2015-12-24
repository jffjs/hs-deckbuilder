import {describe, it, inject, beforeEach, beforeEachProviders} from 'angular2/testing';
import {CardsService} from './cards.service.ts';
import {provide} from 'angular2/core';
import {Http, Response, ResponseOptions, BaseRequestOptions, XHRBackend} from 'angular2/http';
import {MockBackend, MockConnection} from 'angular2/http/testing';

describe('CardsService', () => {
  let service: CardsService;
  let http: Http;
  let mockBackend: MockBackend;
  let cardData = {
    'Basic': [
      { cardId: 'DS1_185', name: 'Arcane Shot'},
      { cardId: 'CS2_087', name: 'Blessing of Might'}
    ],
    'Classic': [
      { cardId: 'EX1_621', name: 'Circle of Healing'},
      { cardId: 'EX1_607', name: 'Inner Rage'}
    ],
    'Naxxramas': [
      { cardId: 'FP1_020', name: 'Avenge' }
    ]
  };

  beforeEachProviders(() => {
    return [
      CardsService,
      MockBackend,
      BaseRequestOptions,
      provide(Http, {useFactory: (backend, options) => {
        return new Http(backend, options);
      }, deps: [MockBackend, BaseRequestOptions]})
    ];
  });

  beforeEach(inject([CardsService, MockBackend], (_service_, _mockBackend_) =>{
    service = _service_;
    mockBackend = _mockBackend_;
  }));

  describe('#getCards', () => {
    it("retrieves and flattens cards from API", () => {
      let connection: MockConnection;
      let options = new ResponseOptions({body: JSON.stringify(cardData)});

      mockBackend.connections.subscribe((c: MockConnection) => {
        connection = c;
      });

      service.getCards().subscribe(cards => {
        expect(cards).toEqual([
          { cardId: 'DS1_185', name: 'Arcane Shot'},
          { cardId: 'CS2_087', name: 'Blessing of Might'},
          { cardId: 'EX1_621', name: 'Circle of Healing'},
          { cardId: 'EX1_607', name: 'Inner Rage'},
          { cardId: 'FP1_020', name: 'Avenge' }
        ]);
      });

      connection.mockRespond(new Response(options));
    });
  });
})

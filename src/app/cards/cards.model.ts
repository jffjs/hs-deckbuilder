interface CardMechanic {
  name: string;
}

export interface Card {
  cardId: string;
  name: string;
  cardSet: string;
  type: string;
  locale: string;

  faction?: string;
  rarity?: string;
  elite?: boolean;
  collectible?: boolean;
  img?: string;
  imgGold?: string;
  cost?: number;
  attack?: number;
  durability?: number;
  race?: string;
  playerClass?: string;
  mechanics?: CardMechanic[];
  artist?: string;
  flavor?: string;
  inPlayText?: string;
}

import { PokerStages } from './PokerStages';

export class BetType {
  name: string;
  score: Number;
}

export class ResultStage {
  hasError: Number;
  title?: String;
  description?: String;
}

export class PokerModel implements PokerStages {
  //config
  denos: Number[];
  maxBet: Number;
  maxPrizeMult: Number;
  minBet: Number;
  //prizes table
  betTypes: BetType[];
  //balance
  balance: Number = 0;
  bonusNonRestricted: Number = 0;
  bonusRestricted: Number = 0;

  //cartas
  carta1: Number = 0;
  carta2: Number = 0;
  carta3: Number = 0;
  carta4: Number = 0;
  carta5: Number = 0;

  //calculados
  apuesta: Number = 0;
  ganancia: Number = 0;

  constructor() {}

  loadConfig(config: Object): Promise<ResultStage> {
    console.log('view load config', config);
    //llenar
    this.denos = config['deno'];
    this.maxBet = config['maxBet'];
    this.maxPrizeMult = config['maxPrizeMult'];
    this.minBet = config['minBet'];

    return Promise.resolve({ hasError: 0 });
  }
  loadPrizesTables(prizes: Object): Promise<ResultStage> {
    //llenar prizes table
    this.betTypes = prizes['betTypes'];
    return Promise.resolve({ hasError: 0 });
  }
  getBalance(balance: Object): Promise<Object> {
    this.balance = balance['balance'];
    this.bonusNonRestricted = balance['bonusNonRestricted'];
    this.bonusRestricted = balance['bonusRestricted'];
    return Promise.resolve({ hasError: 0 });
  }
  betRequest(betRequest: Object): Promise<Object> {
    const cards = betRequest['cards'];
    this.carta1 = cards[0];
    this.carta2 = cards[1];
    this.carta3 = cards[2];
    this.carta4 = cards[3];
    this.carta5 = cards[4];

    return Promise.resolve({ hasError: 0 });
  }
  drawRequest(drawRequest: Object): Promise<Object> {
    console.log('poker model draw', drawRequest);
    const cards = drawRequest['cards'];
    this.carta1 = cards[0];
    this.carta2 = cards[1];
    this.carta3 = cards[2];
    this.carta4 = cards[3];
    this.carta5 = cards[4];

    this.ganancia = drawRequest['win'];

    return Promise.resolve({ hasError: 0 });
  }
  endGameRequest(endGameRequest: Object): Promise<Object> {
    this.carta1 = 0;
    this.carta2 = 0;
    this.carta3 = 0;
    this.carta4 = 0;
    this.carta5 = 0;
    return Promise.resolve({ hasError: 0 });
  }
}

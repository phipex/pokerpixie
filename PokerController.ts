import { PokerModel, ResultStage } from './PokerModel';
import { PokerStages } from './PokerStages';
import { PokerView } from './PokerView';

export class PokerController implements PokerStages {
  pokerModel: PokerModel;
  pokerView: PokerView;

  constructor(pokerView: PokerView, pokerModel: PokerModel) {
    this.pokerModel = pokerModel;
    this.pokerView = pokerView;
    this.loadInitialData();
  }

  loadInitialData() {
    setTimeout(() => {
      const loadPromise = this.loadConfig({
        maxBet: '10',
        maxPrizeMult: '2',
        deno: [100, 2000],
        minBet: '1',
        doubleUpEnable: true,
      });
      const loadPrizesPromise = this.loadPrizesTables({
        betTypes: [
          {
            id: 1,
            name: 'JOTAS O MEJOR',
            score: 1,
            topBet: null,
            betTypes: null,
          },
          {
            id: 2,
            name: 'DOBLE PAR',
            score: 2,
            topBet: null,
            betTypes: null,
          },
          {
            id: 3,
            name: 'TERNA',
            score: 3,
            topBet: null,
            betTypes: null,
          },
          {
            id: 4,
            name: 'ESCALERA',
            score: 4,
            topBet: null,
            betTypes: null,
          },
          {
            id: 5,
            name: 'COLOR',
            score: 5,
            topBet: null,
            betTypes: null,
          },
          {
            id: 6,
            name: 'FULL(TRIO + PAR)',
            score: 6,
            topBet: null,
            betTypes: null,
          },
          {
            id: 7,
            name: 'POKER',
            score: 25,
            topBet: null,
            betTypes: null,
          },
          {
            id: 8,
            name: 'ESCALERA COLOR',
            score: 50,
            topBet: null,
            betTypes: null,
          },
          {
            id: 9,
            name: 'ESCALERA REAL',
            score: 400,
            topBet: null,
            betTypes: null,
          },
        ],
      });
      const balancePromise = this.getBalance({
        balance: 981673.299984932,
        bonusNonRestricted: 0,
        bonusRestricted: 0,
      });
    }, 1000);
  }

  onBet(bet: Object) {
    console.log('controller bet', bet);
    const responseBetRequest = {
      cards: [37, 44, 14, 5, 31],
      idPlaysession: 180815,
      gain: 0,
    };
    this.betRequest(responseBetRequest);
  }
  onDraw(draw: Object) {
    console.log('controller draw', draw);
    const responseDraw = {
      cards: [3, 44, 23, 5, 31],
      bonusNonrestricted: 0,
      nameHand: 'TERNA',
      idPlaysession: 180815,
      candoubleup: true,
      idHand: 3,
      bonusRestricted: 0,
      win: 300,
      gain: 3,
    };
    this.drawRequest(responseDraw);
  }

  loadConfig(config: Object): Promise<ResultStage> {
    console.log('locadconfig', config);
    //llenar
    //FIXME no me gusta esta implementacion, no deberia entregar objetos si puede retornar errores para un cath
    const modelConfirm = this.pokerModel.loadConfig(config).then((a) => {
      return a;
    });
    const viewConfirm = this.pokerView.loadConfig({}).then((a) => {
      return a;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ hasError: 0 });
      }, 1000);
    });
  }
  loadPrizesTables(prizes: Object): Promise<Object> {
    console.log('loadPrizesTables', prizes);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //llenar
        //FIXME no me gusta esta implementacion, no deberia entregar objetos si puede retornar errores para un cath
        const modelConfirm = this.pokerModel
          .loadPrizesTables(prizes)
          .then((a) => {
            return a;
          });
        const viewConfirm = this.pokerView.loadPrizesTables({}).then((a) => {
          return a;
        });
        resolve({ hasError: 0 });
      }, 1000);
    });
  }
  getBalance(balance: Object): Promise<Object> {
    const modelConfirm = this.pokerModel.getBalance(balance).then((a) => {
      return a;
    });
    const viewConfirm = this.pokerView.getBalance({}).then((a) => {
      return a;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const modelConfirm = this.pokerModel.getBalance(balance).then((a) => {
          return a;
        });
        const viewConfirm = this.pokerView.getBalance({}).then((a) => {
          return a;
        });
        resolve({ hasError: 0 });
      }, 1000);
    });
  }
  betRequest(betRequest: Object): Promise<Object> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const modelConfirm = this.pokerModel
          .betRequest(betRequest)
          .then((a) => {
            return a;
          });
        const viewConfirm = this.pokerView.betRequest({}).then((a) => {
          return a;
        });
        resolve({ hasError: 0 });
      }, 1000);
    });
  }
  drawRequest(drawRequest: Object): Promise<Object> {
    document.getElementById('finalizar').addEventListener('click', (_) => {
      console.log('finalizar');
      this.endGameRequest({});
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const modelConfirm = this.pokerModel
          .drawRequest(drawRequest)
          .then((a) => {
            return a;
          });
        const viewConfirm = this.pokerView.drawRequest({}).then((a) => {
          return a;
        });
        resolve({ hasError: 0 });
      }, 1000);
    });
  }
  endGameRequest(endGameRequest: Object): Promise<Object> {
    console.log('endGameRequest');
    const modelConfirm = this.pokerModel
      .endGameRequest(endGameRequest)
      .then((a) => {
        return a;
      });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const viewConfirm = this.pokerView.endGameRequest({}).then((a) => {
          return a;
        });
        resolve({ hasError: 0 });
      }, 1000);
    });
  }
}

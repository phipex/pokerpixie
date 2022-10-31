import { PokerModel, ResultStage } from './PokerModel';
import { PokerStages } from './PokerStages';

export abstract class PokerView implements PokerStages {
  pokerModel: PokerModel;
  constructor(pokerModel: PokerModel) {
    this.pokerModel = pokerModel;
    this.paintMessage('iniciando');

    document.getElementById('betButton').addEventListener('click', (_) => {
      const apuestaRequest = { amount: 1, currency: 'COP', deno: 100 }; // esto se llena dependiendo de la vista

      this.paintSpan(apuestaRequest.deno * apuestaRequest.deno, 'Apuesta');
      this.onBet(apuestaRequest);
      //this.onBet({ cards: [2, 22, 14, 34, 3], idPlaysession: 180812, gain: 0 });
    });

    document.getElementById('drawButton').addEventListener('click', (_) => {
      const drawRequest = { heldCards: [14] };
      this.onDraw({ drawRequest });
    });
  }

  abstract onBet(bet: Object);
  abstract onDraw(draw: Object);

  loadConfig(config: Object): Promise<ResultStage> {
    //llenar
    this.paintMessage('loadconfig');

    this.paintSpan(this.pokerModel.denos, 'denos');
    this.paintSpan(this.pokerModel.maxBet, 'maxBet');
    this.paintSpan(this.pokerModel.maxPrizeMult, 'maxPrizeMult');
    this.paintSpan(this.pokerModel.minBet, 'minBet');

    return Promise.resolve({ hasError: 0 });
  }
  loadPrizesTables(prizes: Object): Promise<ResultStage> {
    //llenar
    this.paintMessage('loadPrizesTables');
    this.paintSpan(JSON.stringify(this.pokerModel.betTypes), 'betTypes');
    return Promise.resolve({ hasError: 0 });
  }
  getBalance(balance: Object): Promise<ResultStage> {
    //llenar
    this.paintMessage('getBalance');
    this.paintSpan(this.pokerModel.balance, 'balance');
    this.paintSpan(this.pokerModel.bonusNonRestricted, 'bonusNonRestricted');
    this.paintSpan(this.pokerModel.bonusRestricted, 'bonusRestricted');

    return Promise.resolve({ hasError: 0 });
  }
  betRequest(betRequest: Object): Promise<ResultStage> {
    //llenar
    this.paintMessage('betRequest');
    this.paintSpan(this.pokerModel.carta1, 'Carta1');
    this.paintSpan(this.pokerModel.carta2, 'Carta2');
    this.paintSpan(this.pokerModel.carta3, 'Carta3');
    this.paintSpan(this.pokerModel.carta4, 'Carta4');
    this.paintSpan(this.pokerModel.carta5, 'Carta5');
    this.paintSpan(this.pokerModel.ganancia, 'Ganancia');

    return Promise.resolve({ hasError: 0 });
  }
  drawRequest(drawRequest: Object): Promise<ResultStage> {
    //llenar
    this.paintMessage('drawRequest');

    this.paintSpan(this.pokerModel.carta1, 'Carta1');
    this.paintSpan(this.pokerModel.carta2, 'Carta2');
    this.paintSpan(this.pokerModel.carta3, 'Carta3');
    this.paintSpan(this.pokerModel.carta4, 'Carta4');
    this.paintSpan(this.pokerModel.carta5, 'Carta5');
    this.paintSpan(this.pokerModel.ganancia, 'Ganancia');

    return Promise.resolve({ hasError: 0 });
  }
  endGameRequest(endGameRequest: Object): Promise<ResultStage> {
    //llenar
    this.paintMessage('view endGameRequest');

    this.paintSpan(this.pokerModel.carta1, 'Carta1');
    this.paintSpan(this.pokerModel.carta2, 'Carta2');
    this.paintSpan(this.pokerModel.carta3, 'Carta3');
    this.paintSpan(this.pokerModel.carta4, 'Carta4');
    this.paintSpan(this.pokerModel.carta5, 'Carta5');

    return Promise.resolve({ hasError: 0 });
  }

  private paintMessage(msg: string) {
    // Write TypeScript code!
    const appDiv: HTMLElement = document.getElementById('app');
    appDiv.innerHTML = `<h1>${msg}</h1>`;
  }

  private paintSpan(msg: any, id: string) {
    // Write TypeScript code!
    const appDiv: HTMLElement = document.getElementById(id);
    appDiv.innerHTML = `${msg}`;
  }
}

export interface PokerStages {
  loadConfig(config: Object): Promise<Object>;
  loadPrizesTables(prizes: Object): Promise<Object>;
  getBalance(balance: Object): Promise<Object>;
  betRequest(betRequest: Object): Promise<Object>;
  drawRequest(drawRequest: Object): Promise<Object>;
  endGameRequest(endGameRequest: Object): Promise<Object>;
}

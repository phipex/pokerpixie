// Import stylesheets
import { PokerController } from './PokerController';
import { PokerModel } from './PokerModel';
import { PokerView } from './PokerView';
import './style.css';

class PokerViewImplement extends PokerView {
  onBet(bet: Object) {
    pokerController.onBet(bet);
  }
  onDraw(draw: Object) {
    pokerController.onDraw(draw);
  }
}
const pokerModel = new PokerModel();
const pokerView = new PokerViewImplement(pokerModel);
const pokerController = new PokerController(pokerView, pokerModel);

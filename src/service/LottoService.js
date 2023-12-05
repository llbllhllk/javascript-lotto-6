import CONSTANTS from '../constants/constants.js';

class LottoService {
  numberOfLotto(purchaseAmount) {
    return purchaseAmount / CONSTANTS.purchaseAmount.thousand;
  }
}

export default LottoService;

import LottoController from './controller/LottoController.js';

class App {
  #lottoController = new LottoController();

  async play() {
    return this.#lottoController.start();
  }
}

export default App;

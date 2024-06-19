import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        const someArray = await read();
        const somestring = await json(someArray);
        return JSON.parse(somestring);
      } catch (er) {
        console.log(er);
      }
    })();
  }
}

import GameSavingLoader from './GameSavingLoader';

(async () => {
  const gameSave = await GameSavingLoader.load();
  console.log(gameSave);
})();

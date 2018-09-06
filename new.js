const prompt = require('prompt');

const playerTurn = (player) => {
  console.log('Turn player' + player)
  prompt.start();
  prompt.get(['position'], (err, res) => {
    console.log(res.input, 'RESULT')
  })
}

const board = () => {
  console.log('Board\n', '   |   |    \n', '----------- \n', '   |   |    \n', '----------- \n', '   |   |    \n')
}

board()
playerTurn()

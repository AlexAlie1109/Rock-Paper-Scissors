$(document).ready(function(){

  let weapons = ['rock', 'paper', 'scissors'];
  let player = undefined;
  let computer = undefined;

  let game = {
    rounds: 1,
    ties: 0,
    winner: undefined,
    playerWins: 0,
    computerWins: 0
  };

  $('.player-div').hide();


  $('.start-button').on('click', function(){
    $('.start-button').hide();
    $('.player-div').show();
  });

  gameChoices();

  $('.rock').on('click', function(){
    player = 'rock';
    gameLogic(player, computer);
  });

  $('.paper').on('click', function(){
    player = 'paper';
    gameLogic(player, computer);
  });

  $('.scissors').on('click', function(){
    player = 'scissors';
    gameLogic(player, computer);
  });

  function gameChoices(){
    weapons.forEach((choices) => {
      let button = $('<button>');
      button.attr('class', choices);
      button.attr('value', choices)
      button.text(choices);
      $('#button-choices').append(button);
    });
  };




  function gameLogic(){
    computer =  weapons[Math.floor(Math.random() * weapons.length)]
    $('.rounds').text(`Round: ${game.rounds++}`)

    if(player === 'rock' && computer === 'rock'){
      winLoss();
      game.ties++;
      $('.winner-loser').text("Game Tied");
    }else if (player === 'rock' && computer === 'paper'){
      winLoss();
      game.computerWins++;
      $('.winner-loser').text("Computer Wins");
    }else if (player === 'rock' && computer === 'scissors'){
      winLoss();
      game.playerWins++;
      $('.winner-loser').text("You Win");
    }else if (player === 'paper' && computer === 'paper'){
      winLoss();
      game.ties++;
      $('.winner-loser').text("Game Tied");
    }else if(player === 'paper' && computer === 'rock'){
      winLoss();
      game.playerWins++;
      $('.winner-loser').text("You Win");
    }else if(player === 'paper' && computer === 'scissors'){
      winLoss();
      game.computerWins++;
      $('.winner-loser').text("Computer Wins");
    }else if(player === 'scissors' && computer === 'scissors'){
      winLoss();
      game.ties++;
      $('.winner-loser').text("Game Tied");
    }else if(player === 'scissors' && computer === 'rock'){
      winLoss();
      game.computerWins++;
      $('.winner-loser').text("Computer Wins");
    }else if(player === 'scissors' && computer === 'paper'){
      winLoss();
      game.playerWins++;
      $('.winner-loser').text("You Win");
    }
  };


  function winLoss(){
    $('.win-loss-ties').text(`Wins: ${game.playerWins} Loss: ${game.computerWins} Ties: ${game.ties}`);
  };



});

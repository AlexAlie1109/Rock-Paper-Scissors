$(document).ready(function(){

  let weapons = ['rock', 'paper', 'scissors'];
  let player = [];
  let computer = [];

  $('.player-div').hide();

  $('.start-button').on('click', function(){

    $('.start-button').hide();
    $('.player-div').show();
    gameChoices();

    $('.rock').on('click', function(){
      rock();
    });

    $('.paper').on('click', function(){
      paper();
    });

    $('.scissors').on('click', function(){
      scissors();
    });

  });

  function gameChoices(){
    weapons.forEach((choices) => {
      let button = $('<button>');
      button.attr('class', choices);
      button.text(choices);
      $('.player-choices').append(button);
    });
  };


  function rock(){
    let computerGuess = weapons[Math.floor(Math.random() * weapons.length)];
    computer.pop();
    computer.push(computerGuess)
    console.log(computer);
    player.pop();
    player.push('rock');
    console.log(player);

    if(player.join('') && computer.join('') === 'rock'){
      console.log('tie')
    }else if (player.join('') === 'rock' && computer.join('') === 'paper'){
      console.log('Paper Beats Rock');
    }else if (player.join('') === 'rock' && computer.join('') === 'scissors'){
      console.log('Rock Beats Scissors');
    }else{
      console.log('Error');
    }
  };

  function paper(){
    let computerGuess = weapons[Math.floor(Math.random() * weapons.length)];
    computer.pop();
    computer.push(computerGuess)
    console.log(computer);
    player.pop();
    player.push('paper');
    console.log(player);

    if(player.join('') === 'paper' && computer.join('') === 'rock'){
      console.log('Paper Beats Rock')
    }else if (player.join('') === 'paper' && computer.join('') === 'paper'){
      console.log('Tie');
    }else if (player.join('') === 'paper' && computer.join('') === 'scissors'){
      console.log('Scissors Beats Paper');
    }else{
      console.log('Error');
    }
  };

  function scissors(){
    let computerGuess = weapons[Math.floor(Math.random() * weapons.length)];
    computer.pop();
    computer.push(computerGuess)
    console.log(computer);
    player.pop();
    player.push('scissors');
    console.log(player);

    if(player.join('') === 'scissors' && computer.join('') === 'rock'){
      console.log('Rock Beats Scissors')
    }else if (player.join('') === 'scissors' && computer.join('') === 'paper'){
      console.log('Scissors Beats Paper');
    }else if (player.join('') === 'scissors' && computer.join('') === 'scissors'){
      console.log('Tie');
    }else{
      console.log('Error');
    }
  };

});

"use strict";

let parsedClient = '';

function retrieveClients() {
  let retrievedClient = localStorage.getItem('client');
  if (retrievedClient) {
  parsedClient = JSON.parse(retrievedClient);
  console.log(parsedClient.cardio);
  }
}
function renderOne () {
  let tdOne = document.getElementById('textOne');
  tdOne.textContent = parsedClient.cardio;
  let tdOneTwo = document.getElementById('textOneTwo');
  tdOneTwo.textContent = parsedClient.cardioMinutes;
  
  let tdTwo = document.getElementById('textTwo');
  tdTwo.textContent = parsedClient.freeWeight;
  let tdTwoTwo = document.getElementById('textTwoTwo');
  tdTwoTwo.textContent = parsedClient.freeWeightReps;
  
  let tdThree = document.getElementById('textThree');
  tdThree.textContent = parsedClient.cardioTwo;
  let tdThreeTwo = document.getElementById('textThreeTwo');
  tdThreeTwo.textContent = parsedClient.cardioMinutesTwo;
  
  let tdFour = document.getElementById('textFour');
  tdFour.textContent = parsedClient.freeWeightTwo;
  let tdFourTwo = document.getElementById('textFourTwo');
  tdFourTwo.textContent = parsedClient.freeWeightRepsTwo;
  
  let tdFive = document.getElementById('textFive');
  tdFive.textContent = parsedClient.cardio;
  let tdFiveTwo = document.getElementById('textFiveTwo');
  tdFiveTwo.textContent = parsedClient.cardioMinutes;
  
  let one = document.getElementById('one');
  one.textContent = parsedClient.cardio;
  let oneTwo = document.getElementById('oneTwo');
  oneTwo.textContent = parsedClient.cardioMinutes;
  
  let two = document.getElementById('two');
  two.textContent = parsedClient.calisthenics;
  let twoTwo = document.getElementById('twoTwo');
  twoTwo.textContent = parsedClient.calisthenicsReps;
  
  let three = document.getElementById('three');
  three.textContent = parsedClient.cardioTwo;
  let threeTwo = document.getElementById('threeTwo');
  threeTwo.textContent = parsedClient.cardioMinutesTwo;
  
  let four = document.getElementById('four');
  four.textContent = parsedClient.calisthenicsTwo;
  let fourTwo = document.getElementById('fourTwo');
  fourTwo.textContent = parsedClient.calisthenicsRepsTwo;
  
  let five = document.getElementById('five');
  five.textContent = parsedClient.cardio;
  let fiveTwo = document.getElementById('fiveTwo');
  fiveTwo.textContent = parsedClient.cardioMinutes;



}
retrieveClients();
renderOne();



// this.weight = weight;
//   this.calories = calories;
//   this.cardio = cardio;
//   this.cardioMinutes = '';
//   this.freeWeight = freeWeight;
//   this.freeWeightReps = '';
//   this.calisthenics = calisthenics;
//   this.calisthenicsReps = '';

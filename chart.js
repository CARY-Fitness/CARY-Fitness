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


}
retrieveClients();
renderOne();

function renderTwo () {
  let tdTwo = document.getElementById('textTwo');
  tdTwo.textContent = parsedClient.freeWeightReps;

}
retrieveClients();
renderTwo();


// this.weight = weight;
//   this.calories = calories;
//   this.cardio = cardio;
//   this.cardioMinutes = '';
//   this.freeWeight = freeWeight;
//   this.freeWeightReps = '';
//   this.calisthenics = calisthenics;
//   this.calisthenicsReps = '';

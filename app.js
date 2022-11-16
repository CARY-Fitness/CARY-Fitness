'use strict';

// let clientInfo = [];

let form = document.getElementById('formOne');
let table = document.getElementById('workoutTable');


function Client(weight, calories, cardio) {
  this.weight = weight;
  this.calories = calories;
  this.cardio = cardio;

  // clientInfo.push(this);
  // console.log(clientInfo);
}


function handleSubmit(event) {
  event.preventDefault();
  let weight = event.target.weight.value;
  let calories = event.target.calories.value;
  let cardio = event.target.cardio.value;
  let clientOne = new Client(weight, calories, cardio);
  saveClients(clientOne);
  // form.removeEventListener('submit', handleSubmit);
}

function saveClients(client) {
  let stringifiedClient = JSON.stringify(client);

  localStorage.setItem('client', stringifiedClient);
}

form.addEventListener('submit', handleSubmit);

function retrieveClients() {
  let retrievedClient = localStorage.getItem('client');
  if (retrievedClient) {
    let parsedClient = JSON.parse(retrievedClient);
    return parsedClient;


  }
}

retrieveClients();

function render() {
  let table
}






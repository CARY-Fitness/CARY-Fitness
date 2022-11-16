'use strict';

let clientInfo = [];

let form = document.getElementById('formOne');
let retrievedClient = localStorage.getItem('client');
let table = document.getElementById('workoutTable');


function Client(weight, calories, cardio) {
  this.weight = weight;
  this.calories = calories;
  this.cardio = cardio;

  clientInfo.push(this);
  console.log(clientInfo);
}


function handleSubmit(event) {
  event.preventDefault();
  let weight = event.target.weight.value;
  let calories = event.target.calories.value;
  let cardio = event.target.cardio.value;
  new Client(weight, calories, cardio);
  saveClients();
  form.removeEventListener('submit', handleSubmit);
}

function saveClients() {
  let stringifiedClient = JSON.stringify(clientInfo);

  localStorage.setItem('client', stringifiedClient);
}

form.addEventListener('submit', handleSubmit);

function retrieveClients() {
  if (retrievedClient) {
    let parsedClient = JSON.parse(retrievedClient);
    clientInfo = parsedClient;


  }else {clientInfo = [];

  }
}

retrieveClients();

function render() {
  let table
}






'use strict';
// let userName = prompt('What is your name?');
// alert(`Hey ${userName} welcome to Cary Fitness`);



 let junk = [];

let form = document.getElementById('formOne');
let table = document.getElementById('workoutTable');
let clientWorkOut = retrieveClients();


function Client(weight, calories, cardio, calisthenics, freeWeight) {
  this.weight = weight;
  this.calories = calories;
  this.cardio = cardio;
  this.cardioMinutes = '';
  this.freeWeight = freeWeight;
  this.freeWeightReps = '';
  this.calisthenics = calisthenics;
  this.calisthenicsReps = '';


}

Client.prototype.generateCardioWorkout = function() {
  console.log(this)
  if (this.cardio === 'running') {
    if (this.calories === '700-799') {
      this.cardioMinutes = '60 minutes';
    }
    else if (this.calories === '600-699') {
      this.cardioMinutes = '45 minutes';
    }
    else if (this.calories === '800-899') {
      this.cardioMinutes = '85 minutes';
      
    }
    
  }
  if (this.calisthenics === 'push-ups') {
    if (this.calories === '600-699') {
      this.calisthenicsReps = '50 reps';
  }
  else if (this.calories === '700-799') {
    this.calisthenicsReps = '65 reps';
  } 
  else if (this.calories === '800-899') {
    this.calisthenicsReps = '90 reps'
  }
  }
  if (this.freeWeight === 'bench-press') {
    if (this.calories === '600-699') {
      this.freeWeightReps = '50 reps';
  }
  else if (this.calories === '700-799') {
    this.freeWeightReps = '65 reps';
  } 
  else if (this.calories === '800-899') {
    this.freeWeightReps = '90 reps'

  }
}
}

function handleSubmit(event) {
  event.preventDefault();
  let weight = event.target.weight.value;
  let calories = event.target.calories.value;
  let cardio = event.target.cardio.value;
  let freeWeight = event.target.freeweight.value;
  let calisthenics = event.target.calisthenics.value;
  let clientOne = new Client(weight, calories, cardio, calisthenics, freeWeight);
  clientOne.generateCardioWorkout();
  saveClients(clientOne);
  
  // form.removeEventListener('submit', handleSubmit);
}

function saveClients(client) {
  let stringifiedClient = JSON.stringify(client);
  console.log(stringifiedClient);
  console.log(client);
  
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


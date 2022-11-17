'use strict';
// let userName = prompt('What is your name?');
// alert(`Hey ${userName} welcome to Cary Fitness`);



let junk = [];

let form = document.getElementById('formOne');
let table = document.getElementById('workoutTable');
let clientWorkOut = retrieveClients();


function Client(weight, calories, cardio, cardioTwo, calisthenics, calisthenicsTwo, freeWeight, freeWeightTwo) {
  this.weight = weight;
  this.calories = calories;
  this.cardio = cardio;
  this.cardioMinutes = '';
  this.cardioMinutesTwo = ''
  this.cardioTwo = cardioTwo;
  this.freeWeight = freeWeight;
  this.freeWeightTwo = freeWeightTwo;
  this.freeWeightReps = '';
  this.freeWeightRepsTwo = '';
  this.calisthenics = calisthenics;
  this.calisthenicsTwo = calisthenicsTwo;
  this.calisthenicsReps = '';
  this.calisthenicsRepsTwo = '';


}

Client.prototype.generateCardioWorkout = function () {
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
    if (this.cardioTwo === 'walking') {
      if (this.calories === '700-799') {
        this.cardioMinutesTwo = '100 minutes';
      }
      else if (this.calories === '600-699') {
        this.cardioMinutesTwo = '110 minutes';
      }
      else if (this.calories === '800-899') {
        this.cardioMinutesTwo = '120 minutes';
        console.log(this.cardioMinutesTwo);
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
    if (this.calisthenicsTwo === 'pull-ups') {
      if (this.calories === '600-699') {
        this.calisthenicsReps = '50 reps';
      }
      else if (this.calories === '700-799') {
        this.calisthenicsRepsTwo = '65 reps';
      }
      else if (this.calories === '800-899') {
        this.calisthenicsRepsTwo = '90 reps'
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
    if (this.freeWeightTwo === 'squat') {
      if (this.calories === '600-699') {
        this.freeWeightRepsTwo = '50 reps';
      }
      else if (this.calories === '700-799') {
        this.freeWeightRepsTwo = '65 reps';
      }
      else if (this.calories === '800-899') {
        this.freeWeightRepsTwo = '90 reps'

      }
    }
  }
}

  function handleSubmit(event) {
    event.preventDefault();
    let weight = event.target.weight.value;
    let calories = event.target.calories.value;
    let cardio = event.target.cardio.value;
    let cardioTwo = event.target.cardioTwo.value;
    let freeWeight = event.target.freeweight.value;
    let freeWeightTwo = event.target.freeweightTwo.value;
    let calisthenics = event.target.calisthenics.value;
    let calisthenicsTwo = event.target.calisthenicsTwo.value;
    let clientOne = new Client(weight, calories, cardio, cardioTwo, calisthenics, calisthenicsTwo, freeWeight, freeWeightTwo);
    clientOne.generateCardioWorkout();
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


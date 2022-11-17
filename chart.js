"use strict";

let parsedClient = '';

function retrieveClients() {
  let retrievedClient = localStorage.getItem('client');
  if (retrievedClient) {
  parsedClient = JSON.parse(retrievedClient);
  console.log(parsedClient.cardio);
  }
}
function render () {
  let tdOne = document.getElementById('testOneText');
  tdOne.textContent = parsedClient.cardio;
  console.log('here');

}
retrieveClients();
render();





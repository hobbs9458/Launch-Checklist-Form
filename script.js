// Write your JavaScript code here

const missionTarget = document.getElementById('missionTarget');
let randomNum = Math.floor(Math.random() * 6);
console.log(randomNum); 

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function(json) {
      missionTarget.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[randomNum].name}</li>
         <li>Diameter: ${json[randomNum].diameter}</li>
         <li>Star: ${json[randomNum].star}</li>
         <li>Distance from Earth: ${json[randomNum].distance}</li>
         <li>Number of Moons: ${json[randomNum].moons}</li>
      </ol>
      <img src="${json[randomNum].image}">`;
   });
});

const launchForm = document.getElementById('launchForm');

launchForm.addEventListener('submit', (e) => {
   const pilotName = document.querySelector('input[name = pilotName]');
   const coPilotName = document.querySelector('input[name = copilotName]');
   const fuelLevel = document.querySelector('input[name = fuelLevel]');
   const cargoMass = document.querySelector('input[name = cargoMass]');
   const pilotStatus = document.getElementById('pilotStatus');
   const coPilotStatus = document.getElementById('copilotStatus');
   const fuelStatus = document.getElementById('fuelStatus');
   const cargoStatus = document.getElementById('cargoStatus');
   const launchStatus = document.getElementById('launchStatus');
   const faultyItems = document.getElementById('faultyItems');
   
   
  if(pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
      alert("Error: All fields are required for launch.");
      e.preventDefault(); 
   } 

  if(!isNaN(pilotName.value)) {
      alert(`Error: text must be entered into the "Pilot Name" field.`);
      e.preventDefault();
  } else {
     pilotStatus.textContent = `Pilot Name: ${pilotName.value}, Status: Ready`
     
  }
  
  if(!isNaN(coPilotName.value)) {
      alert(`Error: text must be entered into the "Co-Pilot Name" field.`);
      e.preventDefault();
  } else {
   coPilotStatus.textContent = `Co-Pilot Name: ${coPilotName.value}, Status: Ready`
}

  if(isNaN(fuelLevel.value)) {
      alert(`Error: a number must be entered into the "Fuel Level" field.`);
      e.preventDefault();
  } else if (fuelLevel.value < 10000){
   fuelStatus.textContent = `Fuel levels are too low for launch`;
   e.preventDefault();
} else {
   fuelStatus.textContent = `Fuel level high enough for launch`;
}

  if(isNaN(cargoMass.value)) {
      alert(`Error: a number must be entered into the "Cargo Mass" field.`)
      e.preventDefault();
  } else if (cargoMass.value > 10000) {
     cargoStatus.textContent = `The cargo mass is too high for takeoff.`;
     e.preventDefault();
  } else {
     cargoStatus.textContent = `Cargo mass low enough for launch`;
  }

  if(cargoMass.value > 10000 || fuelLevel.value < 10000) {
   launchStatus.textContent = `Shuttle not ready for launch`;
   launchStatus.style.color = "red";
   e.preventDefault();
  } else {
   launchStatus.textContent = `Shuttle is ready for launch`;
   launchStatus.style.color = "green";
  }

  if(fuelLevel.value === "") {
      fuelStatus.textContent = "Please enter a fuel level.";
  } 
  
  if(cargoMass.value === "") {
      cargoStatus.textContent = "Please enter a cargo mass.";
  } 
  if(pilotName.value === "") {
      pilotStatus.textContent = "Please enter the pilot's name.";
  } 
  
  if(coPilotName.value === "") {
      coPilotStatus.textContent = "Please enter the co-pilot's name.";
  } 

  faultyItems.style.visibility = "visible";
  
  e.preventDefault();
});


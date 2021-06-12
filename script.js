// Write your JavaScript code here!
window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[2].name}</li>
            <li>Diameter: ${json[2].diameter}</li>
            <li>Star: ${json[2].star}</li>
            <li>Distance from Earth: ${json[2].distance}</li>
            <li>Number of Moons: ${json[2].moons}</li>
         </ol>
         <img src="${json[2].image}">
         `;
      });
   });

  let form = document.querySelector("form");
  form.addEventListener("submit", function(event){
      
      let pilotNmInput = document.querySelector("input[name=pilotName]");
      let coPilotNmInput = document.querySelector("input[name=copilotName]");
      let fuelLvlInput = document.querySelector("input[name=fuelLevel]");
      let cargoMssInput = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
      let fuelStatus = document.getElementById("fuelStatus");
      let launchStatus = document.getElementById("launchStatus");
      let cargoStatus = document.getElementById('cargoStatus');

      let arr1 = pilotNmInput.value.split("");
      let arr2 = coPilotNmInput.value.split("");
      console.log(typeof(pilotNmInput.value));
      if(pilotNmInput.value === "" || coPilotNmInput.value === "" || fuelLvlInput.value === "" || cargoMssInput === "") {
         alert("All field are required!");
      } else if (isNaN(fuelLvlInput.value) === true || isNaN(cargoMssInput.value) === true) {
         alert("Field only accepts numbers");
      }

      if(Number(fuelLvlInput.value) < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "there is not enough fuel for the journey";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      } else if(Number(cargoMssInput.value) > 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "there is too much mass for the shuttle to take off";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      } else {
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle is ready for launch";
      }

      event.preventDefault();
  }); 
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
